// WORK PROJECTS (edit this list instead of copy-pasting HTML cards)
const workProjects = [
  { type: 'graphic', tag: 'Google Developer Group ', name: 'Team Reveal', desc: 'Bold halftone poster for Google devloper group team reveal. Distressed red typography on b&w portrait.', image: 'assets/card1.jpg' },
  { type: 'graphic', tag: 'Poster Design · Google Developer Group', name: 'Team 24-25 Reveal', desc: 'Playful torn-paper reveal poster with ransom-note style lettering for Google Develor Group annual team announcement.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.54 AM.jpeg' },
  { type: 'graphic', tag: 'GOOGLE DEVELOPER GROUP', name: 'Past Events Showcase', desc: 'Illustrated events list for Google Developer Group with quirky characters and a yellow-card UI style layout.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM.jpeg' },
  { type: 'graphic', tag: 'INSTAGRAM POST NOSTALGIC BITES', name: 'Pool Party Campaign', desc: 'Summer-themed promotional flyer for Nostalgic Bites featuring tropical elements and product imagery.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (1).jpeg' },
  { type: 'graphic', tag: 'Nostalgic Bites Post', name: '#PrayFor AirIndia 171', desc: 'Mobile-first design with micro-interactions.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (2).jpeg' },
  { type: 'graphic', tag: 'NGO WORK SAANJH', name: 'Meet The Team - Saanjh', desc: 'Team intro card for NGO Saanjh with colourful scrapbook aesthetic, doodles, and profile reveal layout.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (3).jpeg' },
  { type: 'graphic', tag: 'MENU DESIGN NOSTALGIC BITES', name: 'Naankhatai & Cookies Menu', desc: 'Product menu with arched photo frames, purple- gold branding, and clear pricing layout.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (4).jpeg' },
  { type: 'graphic', tag: 'CAROUSEL POST NOSTALGIC BITES', name: 'Nostalgic Bites Campaign', desc: 'Heartwarming Mothers Day carousel with soft pink watercolor backgrounds and product centrepiece.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (5).jpeg' },
  { type: 'graphic', tag: 'REEL THUMBNAIL NOSTALGIC BITES', name: 'People & Product Reel', desc: 'Vibrant collage-style reel thumbnail with customer testimonials around the Nostalgic Bites jar.Landing page UI with strong visual rhythm.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (6).jpeg' },
  { type: 'uiux', tag: 'UI DESIGN CREATIVE', name: 'Donut Flavors Scroll UI', desc: 'Scroll-animated product Ul with flavour-matched color blocks - Blueberry, Green Apple, Caramel.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM.jpeg' },
  { type: 'uiux', tag: 'UI Design · Original', name: 'Work Smarter SaaS Landing', desc: 'Clean SaaS hero page with workflow illustrations, bold headline, and integration cards.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM (5).jpeg' },
  { type: 'uiux', tag: 'UI Design · Creative', name: 'Meteora — Planet Explorer', desc: 'Immersive space-themed website UI featuring planetary data, dark starfield, and orbital ring visuals.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM (1).jpeg' },
  { type: 'uiux', tag: 'UI Design · Replicated', name: 'Myntra App Redesign', desc: 'Mobile-first e-commerce UI with product listings, search, and a clean shopping experience.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.42 AM (1).jpeg' },
  { type: 'uiux', tag: 'UI Design · Replicated', name: 'Spotify App Clone', desc: 'Dark-themed music streaming app with personalized recommendations, playlists, and now-playing UI.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.42 AM.jpeg' },

  { type: 'uiux', tag: 'UI Design · Replicated', name: 'Nike Air Max Landing Page', desc: 'Striking dark product showcase with vertical text, bold headers, and immersive product photography.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM (2).jpeg' },
  { type: 'uiux', tag: 'UI Design · Replicated', name: 'Logitech MX Master 3S', desc: 'Premium dark-mode product page with editorial layout, large typography, and multi-angle product shots.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM (3).jpeg' },
  { type: 'uiux', tag: 'DESIGN ORIGINAL', name: 'Dual Sense Product Card', desc: 'Gaming product card Ul with color selection, bold typography, and dark futuristic aesthetic.', image: 'assets/WhatsApp Image 2026-03-26 at 1.30.41 AM (4).jpeg' },
  { type: 'graphic', tag: 'SPILL', name: 'Spill Campus App Promo', desc: 'High-energy campus app promo with bold green gradient, Hinglish copy, and 3D UI mockups.', image: 'assets/WhatsApp Image 2026-03-26 at 1.29.55 AM (7).jpeg' },
];

// IMAGE DATA FOR LIGHTBOX (auto-filled from workProjects)
const uiuxImages = workProjects
  .filter(p => p.type === 'uiux')
  .map(p => ({ src: p.image, caption: p.name }));

const graphicImages = workProjects
  .filter(p => p.type === 'graphic')
  .map(p => ({ src: p.image, caption: p.name }));

function renderWorkCards() {
  const grid = document.getElementById('workGrid');
  const template = document.getElementById('projectCardTemplate');
  if (!grid || !template) return;

  grid.innerHTML = '';

  const lightboxIndexByType = { uiux: 0, graphic: 0 };
  workProjects.forEach((project) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.classList.add(project.type);

    const img = card.querySelector('.project-img');
    img.src = project.image;
    img.alt = project.name;

    card.querySelector('.project-tag').textContent = project.tag;
    card.querySelector('.project-name').textContent = project.name;
    card.querySelector('.project-desc').textContent = project.desc;

    const lbIdx = lightboxIndexByType[project.type]++;
    card.addEventListener('click', () => openLightbox(lbIdx, project.type));

    grid.appendChild(card);
  });
}

let lbCurrentIdx = 0;
let lbCurrentSet = [];

function openLightbox(idx, type) {
  lbCurrentSet = type === 'uiux' ? uiuxImages : graphicImages;
  if (!lbCurrentSet.length) return;
  lbCurrentIdx = idx;
  showLbImage();
  document.getElementById('lightbox').classList.add('active');
}

function openSingleImage(src, caption = '') {
  if (!src) return;
  lbCurrentSet = [{ src, caption }];
  lbCurrentIdx = 0;
  showLbImage();
  document.getElementById('lightbox').classList.add('active');
}

function showLbImage() {
  const current = lbCurrentSet[lbCurrentIdx];
  if (!current) return;

  const img = document.getElementById('lbImg');
  img.src = current.src;
  img.alt = current.caption || 'Project image';

  const captionParts = [];
  if (current.caption) captionParts.push(current.caption);
  captionParts.push(`${lbCurrentIdx + 1} / ${lbCurrentSet.length}`);
  document.getElementById('lbCaption').textContent = captionParts.join(' · ');

  const showNav = lbCurrentSet.length > 1;
  document.getElementById('lbPrev').style.display = showNav ? 'flex' : 'none';
  document.getElementById('lbNext').style.display = showNav ? 'flex' : 'none';
}

document.getElementById('lbClose').onclick = () => {
  document.getElementById('lightbox').classList.remove('active');
};
document.getElementById('lbPrev').onclick = () => {
  if (!lbCurrentSet.length) return;
  lbCurrentIdx = (lbCurrentIdx - 1 + lbCurrentSet.length) % lbCurrentSet.length;
  showLbImage();
};
document.getElementById('lbNext').onclick = () => {
  if (!lbCurrentSet.length) return;
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

function bindCertificateCard() {
  const card = document.getElementById('certificateCard');
  if (!card) return;

  const open = () => {
    const src = card.dataset.certSrc;
    const caption = card.dataset.certCaption || '';
    openSingleImage(src, caption);
  };

  card.addEventListener('click', open);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
}

// Build the grid before attaching hover/reveal listeners
renderWorkCards();
bindCertificateCard();

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
