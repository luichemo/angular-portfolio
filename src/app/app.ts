import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styleUrl: './app.scss'
})
export class App {
  title = 'angular-portfolio';
}