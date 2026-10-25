(function(){
  var key='', last=null, m='clamp(12px,2.5vw,32px)';
  function upd(){
    var hd=document.querySelector('[data-mk-header]'); if(!hd) return;
    if(hd!==last){ last=hd; key=''; }
    var bk=document.querySelector('[data-mk-book]'), light=false;
    document.querySelectorAll('[data-mk-light]').forEach(function(el){ var q=el.getBoundingClientRect(); if(q.top<=40&&q.bottom>40) light=true; });
    document.querySelectorAll('[data-mk-rise]').forEach(function(el){ if(el.getBoundingClientRect().top<innerHeight*.9) el.style.transform='none'; });
    var gl=(document.scrollingElement||document.documentElement).scrollTop>40, k=gl+'|'+light;
    if(k===key) return; key=k; var S=hd.style;
    S.color=light?'#052D8F':'#F7F9FC';
    S.top=gl?'10px':'0'; S.left=S.right=gl?m:'0'; S.padding=gl?'9px 10px 9px clamp(14px,2vw,22px)':'20px clamp(20px,4vw,48px)'; S.borderRadius=gl?'999px':'0';
    S.background=gl?(light?'rgba(247,249,252,.86)':'rgba(8,20,51,.82)'):'transparent';
    S.borderColor=gl?(light?'rgba(5,45,143,.12)':'rgba(193,229,251,.16)'):'transparent';
    S.boxShadow=gl?(light?'0 10px 40px rgba(5,45,143,.10), inset 0 1px 0 rgba(255,255,255,.7)':'0 10px 40px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.08)'):'none';
    S.backdropFilter=S.webkitBackdropFilter=gl?'blur(28px) saturate(1.8)':'none';
    if(bk){ bk.style.top=gl?'18px':'14px'; bk.style.right=gl?'calc('+m+' + 9px)':'clamp(20px,4vw,48px)'; }
  }
  function clk(){ var t=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Jakarta',hour12:false}); document.querySelectorAll('[data-mk-clock]').forEach(function(e){ e.textContent=t; }); }
  addEventListener('scroll',upd,{passive:true,capture:true}); addEventListener('resize',upd);
  setInterval(upd,300); setInterval(clk,1000); clk();
})();
