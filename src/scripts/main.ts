import * as THREE from 'three';
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initLeaves, destroyLeaves, initScrollAnimations, initCardHover, setWindSpeed } from './animations';
import { AmbientAudio } from './audio';

// HTML partials (assembled at runtime)
// @ts-ignore
import heroHTML from '../sections/hero.html?raw';
// @ts-ignore
import aboutHTML from '../sections/about.html?raw';
// @ts-ignore
import skillsHTML from '../sections/skills.html?raw';
// @ts-ignore
import contactHTML from '../sections/contact.html?raw';

gsap.registerPlugin(ScrollTrigger);

let vantaEffect: any;

function initVanta() {
  const el = document.getElementById('vanta-bg');
  if (!el) return;
  vantaEffect = CLOUDS({
    el,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    skyColor: 0x3b4a45,
    cloudColor: 0xf8f6f4,
    cloudShadowColor: 0x2c3531,
    sunColor: 0xa4c3b2,
    sunGlareColor: 0xa4c3b2,
    sunlightColor: 0xa4c3b2,
    zoom: 0.6
  });
}

function init() {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = [
      heroHTML,
      aboutHTML,
      skillsHTML,
      contactHTML
    ].join('\n');
  }

  initVanta();
  initLeaves();
  initScrollAnimations();
  initCardHover();
  // eslint-disable-next-line no-new
  new AmbientAudio();

  // Expose wind control for quick manual testing (e.g., setWindSpeed(0.5) / 2)
  (window as any).setWindSpeed = setWindSpeed;
}

window.addEventListener('load', init);
window.addEventListener('resize', () => {
  // Vanta recalculates on resize; destroy and recreate for safety
  if (vantaEffect && typeof vantaEffect.destroy === 'function') {
    vantaEffect.destroy();
    vantaEffect = null;
    initVanta();
  }
  // Recreate leaves with new viewport dimensions
  destroyLeaves();
  initLeaves();
});

window.addEventListener('beforeunload', () => {
  if (vantaEffect && typeof vantaEffect.destroy === 'function') vantaEffect.destroy();
  destroyLeaves();
});
