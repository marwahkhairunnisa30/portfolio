(function () {
  if (window.__mkCursor || !matchMedia('(pointer:fine)').matches) return;
  window.__mkCursor = true;
  const init = () => {
    const st = document.createElement('style');
    st.textContent = 'html.mk-cur,html.mk-cur *{cursor:none!important}';
    document.head.appendChild(st);
    document.documentElement.classList.add('mk-cur');
    const ring = document.createElement('div'), dot = document.createElement('div');
    ring.style.cssText = 'position:fixed;left:0;top:0;z-index:9998;pointer-events:none;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:1.5px solid #4990E8;transition:width 200ms cubic-bezier(.2,0,0,1),height 200ms cubic-bezier(.2,0,0,1),margin 200ms cubic-bezier(.2,0,0,1),background 200ms cubic-bezier(.2,0,0,1);transform:translate3d(-9999px,0,0)';
    dot.style.cssText = 'position:fixed;left:0;top:0;z-index:9999;pointer-events:none;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#E9F958;border:2px solid #052D8F;box-sizing:border-box;transform:translate3d(-9999px,0,0)';
    document.body.appendChild(ring); document.body.appendChild(dot);
    const m = { x: -9999, y: -9999 }, c = { x: -9999, y: -9999 }; let hot = false;
    addEventListener('mousemove', e => { m.x = e.clientX; m.y = e.clientY; hot = !!(e.target.closest && e.target.closest('a,button,[data-hover]')); });
    document.addEventListener('mouseleave', () => { m.x = m.y = -9999; });
    const tick = () => {
      c.x += (m.x - c.x) * 0.2; c.y += (m.y - c.y) * 0.2;
      dot.style.transform = `translate3d(${m.x}px,${m.y}px,0)`;
      ring.style.transform = `translate3d(${c.x}px,${c.y}px,0)`;
      const b = hot ? 72 : 40; ring.style.width = ring.style.height = b + 'px'; ring.style.margin = `${-b / 2}px 0 0 ${-b / 2}px`;
      ring.style.background = hot ? 'rgba(73,144,232,.18)' : 'transparent';
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  document.body ? init() : addEventListener('DOMContentLoaded', init);
})();
