import os, re, json, subprocess, tarfile, tempfile, shutil
# Run from the repo root: python3 src-voice.py  (only needed to rebuild the vox-* files; needs npm and curl)
# Builds Socrates' Piper voice (en_GB alan, medium) and the free browser engine that speaks it:
#   vox-alan-1/2/3.bin  the voice, split so each part is under GitHub's 25 MB web-upload limit
#   vox-alan.json       the voice's settings
#   vox-ort.mjs, vox-ort-wasm.mjs, vox-ort.wasm   ONNX Runtime (runs the voice)
#   vox-phon.js, vox-phon.wasm, vox-phon.data      espeak-ng (turns text into speech sounds), English only
VOICE = "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-en_GB-alan-medium.tar.bz2"
PKGS = ["onnxruntime-web@1.20.1", "@diffusionstudio/vits-web@1.0.3", "@diffusionstudio/piper-wasm@1.0.0"]
PARTS = 3
tmp = tempfile.mkdtemp()
def run(*a): subprocess.run(a, cwd=tmp, check=True)
run("curl", "-sSL", "-o", "voice.tar.bz2", VOICE)
run("npm", "pack", "--silent", *PKGS)
for f in os.listdir(tmp):
    if f.endswith((".tgz", ".tar.bz2")):
        d = os.path.join(tmp, f.split(".")[0]); os.makedirs(d, exist_ok=True)
        with tarfile.open(os.path.join(tmp, f)) as t: t.extractall(d, filter="data")
p = lambda *a: os.path.join(tmp, *a)
# the voice
vd = p("voice", "vits-piper-en_GB-alan-medium")
model = open(os.path.join(vd, "en_GB-alan-medium.onnx"), "rb").read()
n = -(-len(model) // PARTS)
for i in range(PARTS): open(f"vox-alan-{i+1}.bin", "wb").write(model[i*n:(i+1)*n])
cfg = json.load(open(os.path.join(vd, "en_GB-alan-medium.onnx.json")))
cfg["parts"] = [f"vox-alan-{i+1}.bin" for i in range(PARTS)]; cfg["bytes"] = len(model)
json.dump(cfg, open("vox-alan.json", "w"), ensure_ascii=False)
# ONNX Runtime (wasm only)
od = p("onnxruntime-web-1", "package", "dist")
shutil.copy(os.path.join(od, "ort.wasm.min.mjs"), "vox-ort.mjs")
shutil.copy(os.path.join(od, "ort-wasm-simd-threaded.mjs"), "vox-ort-wasm.mjs")
shutil.copy(os.path.join(od, "ort-wasm-simd-threaded.wasm"), "vox-ort.wasm")
# espeak-ng phonemizer, with every language dictionary except English taken out of its data file
js = open(p("diffusionstudio-vits-web-1", "package", "dist", "piper-DeOu3H9E.js")).read()
wd = p("diffusionstudio-piper-wasm-1", "package", "build")
data = open(os.path.join(wd, "piper_phonemize.data"), "rb").read()
fs = re.findall(r'\{ filename: "([^"]*)", start: (\d+), end: (\d+) \}', js)
assert fs and len(data) == int(re.search(r"remote_package_size: (\d+)", js).group(1))
out, pos, ents = bytearray(), 0, []
for f, b, e in fs:
    if f.endswith("_dict") and not f.endswith("/en_dict"): continue
    out += data[int(b):int(e)]; ents.append('{ filename: "%s", start: %d, end: %d }' % (f, pos, pos + int(e) - int(b))); pos = len(out)
i = js.index("files: [") + len("files: ["); j = js.index("]", i)
js = js[:i] + ", ".join(ents) + js[j:]
js = re.sub(r"remote_package_size: \d+", "remote_package_size: %d" % len(out), js)
open("vox-phon.js", "w").write(js)
open("vox-phon.data", "wb").write(out)
shutil.copy(os.path.join(wd, "piper_phonemize.wasm"), "vox-phon.wasm")
shutil.rmtree(tmp)
for f in sorted(x for x in os.listdir(".") if x.startswith("vox-")): print(f, os.path.getsize(f))
