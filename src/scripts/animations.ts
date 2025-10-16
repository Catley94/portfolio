import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Wind state
let currentWind = 1; // 1 = base wind
let baseWind = 1;

// Physics state for leaves
interface LeafState {
  el: HTMLElement;
  x: number;
  y: number;
  vxBase: number; // px/s at wind = 1
  vy: number;     // px/s
  swayTween?: gsap.core.Tween;
}

let leafStates: LeafState[] = [];
let originalDocHeight = 0;
let tickerAdded = false;
let autoBurstTimer: gsap.core.Tween | null = null;
let windTween: gsap.core.Tween | null = null;

export function setWindSpeed(speed: number) {
  // Clamp between 0 and 3 for sanity; 0 effectively pauses horizontal motion
  currentWind = Math.max(0, Math.min(speed, 3));
}

export function getWindSpeed() { return currentWind; }

function startWindAutopilot() {
  // Schedule recurring random wind bursts between 1s and 5s
  const scheduleNext = () => {
    const interval = random(1, 5);
    autoBurstTimer = gsap.delayedCall(interval, () => {
      const burstTarget = random(0.4, 2.2); // can be slower or faster
      const rampUp = random(0.4, 0.9);
      const hold = random(0.2, 0.8);
      const rampDown = random(0.8, 1.6);

      const holder = { w: currentWind };
      windTween?.kill();
      windTween = gsap.to(holder, {
        w: burstTarget,
        duration: rampUp,
        ease: 'power2.inOut',
        onUpdate: () => setWindSpeed(holder.w),
        onComplete: () => {
          gsap.delayedCall(hold, () => {
            windTween = gsap.to(holder, {
              w: baseWind,
              duration: rampDown,
              ease: 'power2.inOut',
              onUpdate: () => setWindSpeed(holder.w),
              onComplete: scheduleNext
            });
          });
        }
      });
    });
  };

  // Start the loop
  scheduleNext();
}

function stopWindAutopilot() {
  autoBurstTimer?.kill();
  autoBurstTimer = null;
  windTween?.kill();
  windTween = null;
}

export function destroyLeaves() {
  // Kill sway tweens
  leafStates.forEach(s => s.swayTween?.kill());
  leafStates = [];

  if (tickerAdded) {
    gsap.ticker.remove(updateLeaves);
    tickerAdded = false;
  }

  stopWindAutopilot();
}

export function initLeaves() {
  const leaves = Array.from(document.querySelectorAll<HTMLImageElement>('.leaf'));
  const vw = window.innerWidth;

  // Freeze the original full document height at init
  const doc = document.documentElement;
  originalDocHeight = Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight);

  // Clean up any previous instance
  destroyLeaves();

  // Initialize physics for each leaf (y in world/doc coordinates)
  leaves.forEach((leaf) => {
    // Randomly choose to spawn from left edge or from the top
    const spawnFromTop = Math.random() < 0.4; // 40% top, 60% left for variety

    let x: number;
    let y: number;
    let vy: number;

    if (spawnFromTop) {
      // Start just above the top, somewhere across the viewport width
      x = random(-20, vw * 0.9);
      y = random(-120, -40);
      vy = random(0, 6); // slight downward motion; gravity will take over
    } else {
      // Start just off the left side, somewhere within the document height
      x = random(-vw, -40);
      y = random(0, Math.max(0, originalDocHeight - 40));
      vy = random(-6, 6); // allow a bit of initial up/down variance
    }

    const vxBase = random(40, 90); // px/s at wind=1

    // Render position relative to viewport (fixed layer): yScreen = yWorld - scrollY
    const yScreen = y - window.scrollY;
    gsap.set(leaf, { x, y: yScreen, rotation: random(-15, 15), opacity: random(0.35, 0.6), scale: random(0.85, 1.15) });

    const swayTween = gsap.to(leaf, {
      rotation: `+=${random(-12, 12)}`,
      duration: random(3.0, 5.5),
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    leafStates.push({ el: leaf, x, y, vxBase, vy, swayTween });
  });

  // Begin ticker-driven physics
  if (!tickerAdded) {
    gsap.ticker.add(updateLeaves);
    tickerAdded = true;
  }

  // Start wind autopilot bursts
  startWindAutopilot();
}

const GRAVITY = 12; // px/s^2
function updateLeaves() {
  const dt = gsap.ticker.deltaRatio() / 60; // seconds since last tick
  const vw = window.innerWidth;
  const scrollY = window.scrollY || window.pageYOffset || 0;

  for (const s of leafStates) {
    const vx = s.vxBase * currentWind; // wind affects horizontal speed
    s.vy += GRAVITY * dt; // gravity accelerates downward

    s.x += vx * dt;
    s.y += s.vy * dt; // s.y is world/doc coordinate

    // Render position relative to viewport on a fixed layer
    const yScreen = s.y - scrollY;
    gsap.set(s.el, { x: s.x, y: yScreen });

    // Despawn only when fully off-screen to the right OR beyond the original site height
    const offRight = s.x > vw + 80;
    const offBottomOfSite = s.y > originalDocHeight + 80;

    if (offRight || offBottomOfSite) {
      // Randomize spawn origin: left edge or top edge
      if (Math.random() < 0.5) {
        // Left spawn
        s.x = -80;
        s.y = random(-40, Math.max(0, originalDocHeight * 0.6)); // prefer upper portion of site
        s.vy = random(-10, 0); // slight upward/neutral kick; gravity pulls down thereafter
      } else {
        // Top spawn
        s.x = random(-20, vw * 0.9);
        s.y = random(-120, -40);
        s.vy = random(0, 6); // slight downward motion
      }
      // Randomize appearance a bit on respawn; render with updated screen Y
      const respawnYScreen = s.y - scrollY;
      gsap.set(s.el, { x: s.x, y: respawnYScreen, rotation: random(-20, 20), opacity: random(0.3, 0.6), scale: random(0.8, 1.15) });
    }
  }
}

export function initScrollAnimations() {
  // Hero text fade-in on load
  gsap.to('.fade-in', { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.1 });
  gsap.to('.fade-in-delay', { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.35 });

  // About section reveal
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out'
  });

  // Skill cards stagger
  gsap.from('#skills .card', {
    scrollTrigger: {
      trigger: '#skills .cards',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    x: -30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Contact reveal
  gsap.from('.contact-content', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    duration: 1.0,
    ease: 'power2.out'
  });
}

export function initCardHover() {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.card'));
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.03, duration: 0.2, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1.0, duration: 0.2, ease: 'power2.out' });
    });
  });
}
