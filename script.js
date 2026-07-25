document.getElementById('year').textContent = new Date().getFullYear();

/* mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

/* animate stats + skills when visible */
const statNums = document.querySelectorAll('.stat-num');
const skillFills = document.querySelectorAll('.skill-fill');

function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const tick = () => {
    current += step;
    if (current >= target){
      el.textContent = target;
    } else {
      el.textContent = current;
      requestAnimationFrame(tick);
    }
  };
  tick();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains('stat-num')){
      animateCount(entry.target);
    }
    if (entry.target.classList.contains('skill-fill')){
      entry.target.style.width = entry.target.dataset.fill + '%';
    }
    observer.unobserve(entry.target);
  });
}, { threshold: 0.4 });

statNums.forEach(el => observer.observe(el));
skillFills.forEach(el => observer.observe(el));
const chatBubble = document.getElementById('chatBubble');
const bubbleClose = document.getElementById('bubbleClose');

setTimeout(() => chatBubble.classList.add('show'), 3000);
bubbleClose.addEventListener('click', (e) => {
  e.preventDefault();
  chatBubble.classList.remove('show');
});