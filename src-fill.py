# Run from the repo root: python3 src-fill.py <name>  (e.g. you). Makes an already cut-out character solid inside
# his outline: the old cut-out of Urch's own character left his dark hair, beard and shirt see-through. Writes in place.
import numpy as np
from PIL import Image, ImageFilter
import sys
name = sys.argv[1]
L = lambda m: Image.fromarray((m*255).astype(np.uint8)); F = lambda m, f: np.asarray(L(m).filter(f)) > 127
def flood(allowed, seed):
    for _ in range(2000):
        nxt = F(seed, ImageFilter.MaxFilter(3)) & allowed
        if (nxt == seed).all(): return seed
        seed = nxt
    return seed
P = ["idle", "right", "wrong", "sweat", "angry", "excited", "win", "lose"]
for i, p in enumerate(P):
    im = Image.open(f"wm-{name}-{p}.webp").convert("RGBA"); px = np.asarray(im).astype(np.float32)
    a = px[..., 3]; m = a > 60
    closed = F(F(m, ImageFilter.MaxFilter(15)), ImageFilter.MinFilter(15))
    edge = np.zeros_like(closed); edge[[0, -1], :] = True; edge[:, [0, -1]] = True
    inside = ~flood(~closed, edge & ~closed)
    rows = np.nonzero((a > 30).sum(1) > 14)[0]; inside[:rows.min() + 2] = False   # nothing above the top of his hair
    core = F(inside, ImageFilter.MinFilter(5))                       # keep the soft outer edge as it was
    na = np.maximum(a, np.asarray(L(core).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32))
    # colour under very low alpha was stored darkened: where alpha was tiny, lift it towards the true dark hair colour
    from scipy import ndimage
    lab, n = ndimage.label(na > 40); sizes = ndimage.sum(np.ones_like(na), lab, range(1, n + 1))
    small = np.isin(lab, [k + 1 for k, z in enumerate(sizes) if z < 400])
    na = np.where(F(small, ImageFilter.MaxFilter(5)), 0, na)
    na[:rows.min()] = np.minimum(na[:rows.min()], a[:rows.min()] * (a[:rows.min()] > 30))          # tiny stray marks around him
    out = px.copy(); out[..., 3] = na
    o = Image.fromarray(out.astype(np.uint8), "RGBA"); o.save(f"wm-{name}-{p}.webp", "WEBP", quality=88, method=6); print(p)
