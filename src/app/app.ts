import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Cocktails } from './components/cocktails/cocktails';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Cocktails],
  template: `
    <app-header />
    <app-cocktails class="flex-auto" />
    <app-footer />
  `,
  styles: `
    :host {
      min-height: 100vh;
      display:flex;
      flex-direction:column;
    }
 `,
})

export class App {
  protected readonly title = signal('cocktails');
}
