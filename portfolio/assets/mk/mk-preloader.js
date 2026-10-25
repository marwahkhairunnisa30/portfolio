/* MK Preloader — growth line.
   Usage: put <script src="mk-preloader.js"></script> right after <body> in index.html. */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { if (sessionStorage.getItem('mk-pre')) return; sessionStorage.setItem('mk-pre', '1'); } catch (e) {}
  if (!document.querySelector('link[href*="Geist+Mono"]')) {
    var f = document.createElement('link'); f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap';
    document.head.appendChild(f);
  }
  var el = document.createElement('div');
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:#052D8F;color:#F7F9FC;font-family:'Geist Mono',ui-monospace,monospace";
  var lg = 'fill="none" stroke="#F7F9FC" stroke-width="9" stroke-linecap="square"';
  el.innerHTML =
    '<svg viewBox="0 0 1512 982" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">' +
      '<polyline data-l points="0,800 240,760 420,780 620,640 820,670 1020,480 1200,420 1330,250" fill="none" stroke="#4990E8" stroke-width="3" stroke-linejoin="round"></polyline>' +
      '<line data-v x1="0" y1="800" x2="0" y2="982" stroke="rgba(193,229,251,.3)" stroke-width="1" stroke-dasharray="4 6"></line>' +
      '<circle data-d cx="0" cy="800" r="9" fill="#E9F958"></circle>' +
    '</svg>' +
    '<svg data-m viewBox="0 0 120 120" style="position:absolute;left:clamp(24px,6.3vw,96px);top:clamp(24px,9.8vh,96px);width:clamp(48px,5.3vw,80px);height:clamp(48px,5.3vw,80px);opacity:0">' +
      '<polyline points="16,96 16,24 40,64 64,24 64,96" ' + lg + '></polyline><line x1="82" y1="24" x2="82" y2="96" ' + lg + '></line><polyline points="104,24 82,64 104,96" ' + lg + '></polyline><circle cx="104" cy="24" r="7" fill="#E9F958"></circle>' +
    '</svg>' +
    '<div style="position:absolute;left:clamp(24px,6.3vw,96px);bottom:clamp(20px,4vh,40px);font-size:12px;letter-spacing:.1em;color:#C1E5FB">MARWAH K — PORTFOLIO</div>' +
    '<div data-n style="position:absolute;right:clamp(24px,6.3vw,96px);bottom:clamp(20px,4vh,40px);font-size:12px;letter-spacing:.1em;color:#C1E5FB">000</div>';

  function start() {
    (document.body || document.documentElement).appendChild(el);
    var T = 1500;
    el.querySelector('[data-m]').animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,0,0,1)', fill: 'forwards' });
    var pl = el.querySelector('[data-l]'), dot = el.querySelector('[data-d]'), vl = el.querySelector('[data-v]'), n = el.querySelector('[data-n]');
    var len = pl.getTotalLength();
    pl.setAttribute('stroke-dasharray', len); pl.style.strokeDashoffset = len;
    var t0 = performance.now();
    function tick(now) {
      var k = Math.min(1, (now - t0) / T), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      pl.style.strokeDashoffset = len * (1 - e);
      var p = pl.getPointAtLength(len * e);
      dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);
      vl.setAttribute('x1', p.x); vl.setAttribute('x2', p.x); vl.setAttribute('y1', p.y);
      n.textContent = String(Math.round(e * 100)).padStart(3, '0');
      if (k < 1) return requestAnimationFrame(tick);
      dot.style.transformOrigin = p.x + 'px ' + p.y + 'px';
      dot.animate([{ transform: 'scale(1)' }, { transform: 'scale(2.6)', offset: .6 }, { transform: 'scale(2)' }], { duration: 420, easing: 'cubic-bezier(.2,0,0,1)', fill: 'forwards' });
      var out = el.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }], { duration: 700, delay: 500, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' });
      out.onfinish = function () { el.remove(); };
    }
    requestAnimationFrame(tick);
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
