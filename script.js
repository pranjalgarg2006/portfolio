// IMAGE DATA FOR LIGHTBOX
const uiuxImages = [
  // Add your UI/UX project images here
  // Example: 'path/to/image.jpg'
];

const graphicImages = [
  // Add your graphic design project images here
  // Example: 'path/to/image.jpg'
];

let lbCurrentIdx = 0;
let lbCurrentSet = [];

function openLightbox(idx, type) {
  lbCurrentSet = type === 'uiux' ? uiuxImages : graphicImages;
  lbCurrentIdx = idx;
  showLbImage();
  document.getElementById('lightbox').classList.add('active');
}

function showLbImage() {
  document.getElementById('lbImg').src = lbCurrentSet[lbCurrentIdx];
  document.getElementById('lbCaption').textContent = `${lbCurrentIdx + 1} / ${lbCurrentSet.length}`;
}

document.getElementById('lbClose').onclick = () => {
  document.getElementById('lightbox').classList.remove('active');
};
document.getElementById('lbPrev').onclick = () => {
  lbCurrentIdx = (lbCurrentIdx - 1 + lbCurrentSet.length) % lbCurrentSet.length;
  showLbImage();
};
document.getElementById('lbNext').onclick = () => {
  lbCurrentIdx = (lbCurrentIdx + 1) % lbCurrentSet.length;
  showLbImage();
};
document.getElementById('lightbox').onclick = (e) => {
  if (e.target === document.getElementById('lightbox')) {
    document.getElementById('lbClose').click();
  }
};
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  if (e.key === 'Escape') document.getElementById('lbClose').click();
});

// FILTER WORK
function filterWork(type, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-item').forEach(el => {
    if (type === 'all' || el.classList.contains(type)) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});
function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 20 + 'px';
  ring.style.top = ry - 20 + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a, button, .project-card, .tool-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'scale(1)';
  });
});

// SCROLL REVEAL
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const bar = e.target.querySelector('.skill-bar-fill');
      if (bar) bar.style.transform = `scaleX(${bar.dataset.width})`;
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el));
document.querySelectorAll('.skill-item').forEach(el => {
  obs.observe(el);
  const bar = el.querySelector('.skill-bar-fill');
  if (bar) {
    const itemObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => {
            bar.style.transform = `scaleX(${bar.dataset.width})`;
          }, 200);
        }
      });
    }, { threshold: 0.5 });
    itemObs.observe(el);
  }
});

// PARALLAX HERO
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const bg = document.querySelector('.hero-bg');
  if (bg) bg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  document.querySelectorAll('.hero-float-1, .hero-float-2, .hero-float-3').forEach((el, i) => {
    const factor = (i + 1) * 0.3;
    el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

// FORM
function handleForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').style.display = 'block';
  e.target.reset();
  setTimeout(() => document.getElementById('formMsg').style.display = 'none', 4000);
}

// MOBILE NAV
function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '70px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'rgba(6,6,8,0.98)';
  links.style.padding = '20px 5%';
  links.style.borderBottom = '1px solid var(--glass-border)';
}
