// Case-study "What I did" grid: pick a column count that fits, then fill the leftover cells with an animated tile.
(() => {
  const grid = document.querySelector('.did'); if (!grid) return;
  const items = grid.querySelectorAll(':scope > div:not(.fill)').length;
  const fill = grid.querySelector('.fill'), cv = fill && fill.querySelector('canvas');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layout = () => {
    let c = Math.max(1, Math.min(items, Math.floor(grid.clientWidth / 270)));
    if (items === 5 && c === 4) c = 3;
    grid.style.gridTemplateColumns = `repeat(${c},minmax(0,1fr))`;
    const rem = items % c;
    if (fill) { fill.hidden = rem === 0; fill.style.gridColumn = `span ${c - rem}`; }
  };
  layout(); new ResizeObserver(layout).observe(grid);
  if (!cv) return;
  const paint = t => {
    const d = Math.min(window.devicePixelRatio || 1, 2), W = cv.clientWidth, H = cv.clientHeight;
    if (W && H) {
      if (cv.width !== Math.round(W * d) || cv.height !== Math.round(H * d)) { cv.width = Math.round(W * d); cv.height = Math.round(H * d); }
      const x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, W, H);
      const s = 10, gap = 22, cols = Math.ceil(W / gap) + 1, rows = Math.ceil(H / gap) + 1;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        const v = Math.sin(i * 0.32 - j * 0.18 - t * 1.4) * 0.5 + 0.5, h = ((i * 73856093) ^ (j * 19349663)) % 97;
        const hot = v > 0.93 && h % 5 === 0, sz = hot ? s : s * (0.5 + v * 0.5);
        x.fillStyle = hot ? '#C9B48A' : v > 0.7 ? '#2E3B33' : '#1A241F';
        x.fillRect(i * gap + (s - sz) / 2 + 6, j * gap + (s - sz) / 2 + 6, sz, sz);
      }
    }
    if (!reduce) requestAnimationFrame(now => paint(now / 1000));
  };
  requestAnimationFrame(() => paint(0));
  if (reduce) new ResizeObserver(() => paint(0)).observe(cv);
})();
