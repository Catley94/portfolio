import { Howl } from 'howler';

const STORAGE_KEY = 'ambientMuted';

export class AmbientAudio {
  private sound: Howl;
  private toggleBtn: HTMLButtonElement | null;

  constructor() {
    // CC0/royalty-free ambient loop from Pixabay (as a placeholder)
    this.sound = new Howl({
      src: [
        'https://cdn.pixabay.com/download/audio/2022/03/15/audio_8b09dd538c.mp3?filename=relaxing-ambient-110874.mp3'
      ],
      loop: true,
      volume: 0.25,
      autoplay: false,
      html5: true
    });

    this.toggleBtn = document.querySelector<HTMLButtonElement>('#audio-toggle');
    this.bindEvents();

    const mutedPref = localStorage.getItem(STORAGE_KEY) === 'true';
    if (!mutedPref) {
      // Respect autoplay policies: wait for user gesture if needed
      const start = () => {
        if (!this.sound.playing()) {
          this.sound.play();
          this.sound.fade(0, 0.25, 2000);
        }
        window.removeEventListener('pointerdown', start);
      };
      window.addEventListener('pointerdown', start, { once: true });
    } else {
      this.updateIcon(true);
    }
  }

  private bindEvents() {
    this.toggleBtn?.addEventListener('click', () => {
      if (this.sound.playing()) {
        this.sound.fade(0.25, 0, 1000);
        setTimeout(() => this.sound.pause(), 1000);
        this.updateIcon(true);
        localStorage.setItem(STORAGE_KEY, 'true');
      } else {
        this.sound.play();
        this.sound.fade(0, 0.25, 1000);
        this.updateIcon(false);
        localStorage.setItem(STORAGE_KEY, 'false');
      }
    });
  }

  private updateIcon(muted: boolean) {
    if (this.toggleBtn) this.toggleBtn.textContent = muted ? '🔇' : '🔊';
  }
}
