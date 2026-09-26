import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer';
import { Header } from './components/header/header';
import { Cocktails } from './views/cocktails/cocktails';
import { seedData } from './shared/data/seed';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  template: `
    <app-header />
    <div class="flex-auto flex flex-col">
      <router-outlet/>
    </div>
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

  // constructor(){
  //   seedData()
  // }
}
