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
export class Projects implements OnInit{
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform built with Angular, NgRx for state management, and Material Design.',
      technologies: ['Angular', 'NgRx', 'Material', 'TypeScript'],
      image: 'alcotime.png',
      github: 'https://github.com/luichemo/e-alcotime',
      demo: 'https://alcohol-store-alcotime.web.app/home'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and drag-and-drop functionality.',
      technologies: ['Angular', 'RxJS', 'Firebase', 'Angular CDK'],
      image: 'alcotime.png',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Advanced analytics dashboard with interactive charts and real-time data visualization.',
      technologies: ['Angular', 'Chart.js', 'REST API', 'Material'],
      image: 'alcotime.png',
      github: 'https://github.com/yourusername/project3',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with user profiles, posts, comments, and real-time notifications.',
      technologies: ['Angular', 'NgRx', 'WebSocket', 'Progressive Web App'],
      image: 'alcotime.png',
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.example.com'
    }
  ];

  ngOnInit(): void {
    this.scrollToTop();
  }
  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}