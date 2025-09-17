document.addEventListener('DOMContentLoaded',()=>{const p=document.body.dataset.page;document.querySelectorAll('nav a[data-page]').forEach(a=>{if(a.dataset.page===p)a.classList.add('active')})});
// Parallax & entrance animations for hero
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const hero = document.querySelector(".hero-full");
  const right = document.querySelector(".hero-full .right");
  const headline = document.querySelector(".hero-full .headline");

  function onScroll(){
    const y = window.scrollY || window.pageYOffset;
    const val = Math.min(80, y * 0.25); // clamp
    root.style.setProperty("--heroParallax", val + "px");
    if (right) right.classList.add("parallax-shift");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // entrance
  [headline, right].forEach(el => { if (el) el.classList.add("reveal-up"); setTimeout(()=>el && el.classList.add("reveal-in"), 60); });
});
