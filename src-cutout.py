import sys, os, subprocess, numpy as np
from PIL import Image, ImageFilter
# Run from the repo root: python3 src-cutout.py <name> <idle> <right> <wrong> <sweat> <angry> <excited> <win> <lose>
# Cuts a Word Master character's 8 ChatGPT poses (square, black Matrix background) out and saves wm-<name>-<pose>.webp,
# 560x560 like the other characters. Needs onnxruntime and numpy; downloads the free isnet-anime cut-out model once.
# Dark cloaks that blend into the background are added back (solid dark-green areas joined to the body); check the results.
POSES = ["idle", "right", "wrong", "sweat", "angry", "excited", "win", "lose"]
MODEL = os.path.expanduser("~/.cache/isnet-anime.onnx")
if not os.path.exists(MODEL):
    subprocess.run(["curl", "-sSL", "-o", MODEL, "--create-dirs", "https://github.com/danielgatis/rembg/releases/download/v0.0.0/isnet-anime.onnx"], check=True)
import onnxruntime as ort
sess = ort.InferenceSession(MODEL)
L = lambda m: Image.fromarray((m*255).astype(np.uint8))
def cutout(src):
    x = np.asarray(src.resize((1024, 1024), Image.LANCZOS), dtype=np.float32)/255 - np.array([.485, .456, .406])
    m = sess.run(None, {"img": x.transpose(2, 0, 1)[None].astype(np.float32)})[0][0, 0]
    return np.asarray(L((m - m.min())/(m.max() - m.min())).resize(src.size, Image.LANCZOS))
def cloak(src, a):
    s = np.asarray(src).astype(int); r, g, b = s[..., 0], s[..., 1], s[..., 2]
    cand = ((g > r + 6) & (g >= b - 10) & (g > 18) & (g < 150) & (r < 90)) | (a > 128)
    cand = np.asarray(L(cand).filter(ImageFilter.MinFilter(9)).filter(ImageFilter.MaxFilter(9))) > 0   # drop thin code glyphs
    body = a > 128; grow = body.copy()
    for _ in range(400):
        nxt = ((np.asarray(L(grow).filter(ImageFilter.MaxFilter(5))) > 0) & cand) | body
        if (nxt == grow).all(): break
        grow = nxt
    grow |= np.asarray(L(grow).filter(ImageFilter.MaxFilter(15)).filter(ImageFilter.MinFilter(15))) > 0   # gaps in the darkest folds
    return np.maximum(a, np.asarray(L(grow & ~body).filter(ImageFilter.GaussianBlur(1.2))))
name, paths = sys.argv[1], sys.argv[2:]
assert len(paths) == 8, "give the 8 poses in order: " + ", ".join(POSES)
for pose, p in zip(POSES, paths):
    src = Image.open(p).convert("RGB"); src.putalpha(Image.fromarray(cloak(src, cutout(src)).astype(np.uint8)))
    out = Image.new("RGBA", (560, 560), (0, 0, 0, 0)); out.alpha_composite(src.resize((560, 560), Image.LANCZOS), (0, 12))   # feet level with the others
    out.save(f"wm-{name}-{pose}.webp", "WEBP", quality=85, method=6); print(pose, os.path.getsize(f"wm-{name}-{pose}.webp"))
