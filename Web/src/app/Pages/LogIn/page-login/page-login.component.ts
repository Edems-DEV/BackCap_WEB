import { Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  id = 'tsparticles';

  particlesOptions = {
    background: {
      color: {
        value: '#141d2b',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 120,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: '#a4b1cd',
      },
      links: {
        color: '#a4b1cd',
        distance: 150,
        enable: true,
        opacity: 1,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        value: 15,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 5, max: 6 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    await loadFull(engine);
  }
}
