import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { fadeIn, scaleIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [fadeIn, scaleIn]
})
export class Projects implements OnInit {
  expandedProjects = new Set<string>();
  projects = [
    {
      title: 'AlcoTime Wine Store',
      description: 'A modern e-commerce platform for premium wines built with Angular 18 and Firebase. Features secure authentication with age verification, real-time shopping cart, multi-step checkout, order tracking, and comprehensive admin dashboard for product and order management. Includes user profiles, order history, and responsive design optimized for all devices.',
      technologies: [
        'Angular 18',
        'TypeScript',
        'Firebase',
        'Cloud Firestore',
        'RxJS',
        'Bootstrap 5',
        'Responsive Design',
        'EmailJS'
      ],
      image: 'alcotime.png',
      github: 'https://github.com/yourusername/alcotime-wine-store',
      demo: 'https://alcotime-wine-store.web.app'
    },
    {
      title: 'Weather Forecast Planner',
      description: "A modern, elegant web application built with Angular 20 that provides comprehensive weather information and 5-day forecasts for cities worldwide. Features a stunning glassmorphism UI design with smooth animations, interactive temperature charts, and detailed hourly breakdowns. Real-time weather data powered by OpenWeatherMap API with responsive design optimized for all devices.",
      technologies: [
        'Angular 20',
        'TypeScript',
        'Angular Material',
        'RxJS',
        'Chart.js',
        'OpenWeatherMap API',
        'CSS3 Glassmorphism',
        'Responsive Design'
      ],
      image: 'weatherApp.png',
      github: 'https://github.com/luichemo/weather-forecast-planner',
      demo: 'https://weather-app-c9977.web.app/'
    },
    {
      title: 'Flowers',
      description: 'A creative front-end animation project that visually simulates blooming flowers using CSS and JavaScript. Focused on smooth transitions, timing, and visual appeal to demonstrate animation techniques and browser rendering performance.',
      technologies: [
        'HTML',
        'SCSS',
        'JavasScript',
        'SCSS'],
      image: 'flower.png',
      github: 'https://github.com/luichemo/flower',
      demo: 'https://luichemo.github.io/webportfolio/flowerIndex.html'
    }
  ];

   ngOnInit(): void {
    this.scrollToTop();
  }

  toggleReadMore(project: any): void {
    if (this.expandedProjects.has(project.title)) {
      this.expandedProjects.delete(project.title);
    } else {
      this.expandedProjects.add(project.title);
    }
  }

  isExpanded(project: any): boolean {
    return this.expandedProjects.has(project.title);
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}