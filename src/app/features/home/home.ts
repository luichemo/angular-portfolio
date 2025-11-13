import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { fadeIn, slideUp } from '../../shared/animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [fadeIn, slideUp]
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'NgRx',
    'SCSS / CSS / HTML',
    'Angular Material',
    'Tailwind',
    'Bootstrap',
    'RESTful API',
    'Git / GitHub',
    'CI/CD',
    'Keycloak',
    'Figma (UI/UX)',
    'Agile',
    'SCRUM',
  ];
}
