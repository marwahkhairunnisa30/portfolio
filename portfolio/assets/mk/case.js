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
  let seen = true; new IntersectionObserver(([e]) => { seen = e.isIntersecting; }, { rootMargin: '100px' }).observe(cv);
  const paint = t => {
    const d = Math.min(window.devicePixelRatio || 1, 2), W = seen ? cv.clientWidth : 0, H = seen ? cv.clientHeight : 0;
    if (W && H) {
      if (cv.width !== Math.round(W * d) || cv.height !== Math.round(H * d)) { cv.width = Math.round(W * d); cv.height = Math.round(H * d); }
      const x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, W, H);
      const s = 10, gap = 22, cols = Math.ceil(W / gap) + 1, rows = Math.ceil(H / gap) + 1;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        const v = Math.sin(i * 0.32 - j * 0.18 - t * 1.4) * 0.5 + 0.5, h = ((i * 73856093) ^ (j * 19349663)) % 97;
        const hot = v > 0.93 && h % 5 === 0, sz = hot ? s : s * (0.5 + v * 0.5);
        x.fillStyle = hot ? '#E9F958' : v > 0.7 ? '#1C2E63' : '#0B1D4D';
        x.fillRect(i * gap + (s - sz) / 2 + 6, j * gap + (s - sz) / 2 + 6, sz, sz);
      }
    }
    if (!reduce) requestAnimationFrame(now => paint(now / 1000));
  };
  requestAnimationFrame(() => paint(0));
  if (reduce) new ResizeObserver(() => paint(0)).observe(cv);
})();

// Challenge motion (BD Team Leadership): eight scattered people align into one funnel that closes on repeat.
(() => {
  const cv = document.querySelector('.ch-motion canvas'); if (!cv) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const stages = ['Prospect', 'Outreach', 'Pipeline', 'Proposal', 'Close'];
  let seen = true; new IntersectionObserver(([e]) => { seen = e.isIntersecting; }, { rootMargin: '100px' }).observe(cv);
  const paint = t => {
    const W = seen ? cv.clientWidth : 0, H = seen ? cv.clientHeight : 0;
    if (W && H) {
      const d = Math.min(window.devicePixelRatio || 1, 2); if (cv.width !== Math.round(W * d) || cv.height !== Math.round(H * d)) { cv.width = Math.round(W * d); cv.height = Math.round(H * d); }
      const x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, W, H);
      const C = 9, ph = (t % C) / C;
      const k = ph < .3 ? 0 : ph < .5 ? ease((ph - .3) / .2) : ph < .92 ? 1 : 1 - ease((ph - .92) / .08);
      const pad = 32, sx = pad + 90, ex = W - pad, sy = H / 2;
      x.font = '500 11px "Geist Mono", monospace'; x.textBaseline = 'middle';
      x.globalAlpha = k; x.strokeStyle = '#1C2E63'; x.beginPath(); x.moveTo(sx, sy); x.lineTo(ex, sy); x.stroke();
      // On narrow screens alternate stage labels above/below the line so they don't collide.
      const tight = (ex - sx) / (stages.length - 1) < 72;
      stages.forEach((s, i) => { const px = sx + (ex - sx) * i / (stages.length - 1); x.fillStyle = i === 4 ? '#E9F958' : '#2A4A9A'; x.fillRect(px - 4, sy - 4, 8, 8); x.fillStyle = '#4990E8'; x.textAlign = i === 4 && tight ? 'right' : 'center'; x.fillText(s, i === 4 && tight ? px + 4 : px, tight && i % 2 ? sy - 22 : sy + 26); });
      x.globalAlpha = 1;
      for (let i = 0; i < 8; i++) {
        const seed = i * 1.7, wx = pad + 40 + ((i * 0.37 + 0.13) % 1) * (W - 2 * pad - 80) + Math.sin(t * .9 + seed) * 26, wy = 28 + ((i * 0.61 + 0.2) % 1) * (H - 56) + Math.cos(t * .7 + seed) * 18;
        const lx = pad + 20, ly = sy - 70 + i * 20;
        const px = wx + (lx - wx) * k, py = wy + (ly - wy) * k;
        x.fillStyle = k > .9 ? '#F7F9FC' : '#4990E8'; x.fillRect(px - 5, py - 5, 10, 10);
        if (k > .9) { x.strokeStyle = 'rgba(42,74,154,.6)'; x.beginPath(); x.moveTo(px + 6, py); x.quadraticCurveTo(sx - 20, py, sx, sy); x.stroke(); }
        if (k < .2) { x.fillStyle = 'rgba(73,144,232,.7)'; x.textAlign = 'left'; x.fillText(['?', '—', '×', '?', '—', '×', '?', '—'][i], px + 10, py); }
      }
      if (k > .95) {
        for (let j = 0; j < 6; j++) { const q = (t * .35 + j / 6) % 1, px = sx + (ex - sx) * q; x.fillStyle = q > .96 ? '#F7F9FC' : '#E9F958'; x.fillRect(px - 3, sy - 3, 6, 6); }
        x.fillStyle = '#E9F958'; x.textAlign = 'right'; x.fillText('closes on repeat', ex, tight ? sy - 52 : sy - 26);
      } else if (k < .2) { x.fillStyle = '#4990E8'; x.textAlign = 'left'; x.fillText('8 people · no shared process', pad, 18); }
    }
    if (!reduce) requestAnimationFrame(now => paint(now / 1000));
  };
  // Reduced motion: hold the aligned end state (t = 6s into the 9s cycle).
  requestAnimationFrame(() => paint(reduce ? 6 : 0));
  if (reduce) new ResizeObserver(() => paint(6)).observe(cv);
})();
