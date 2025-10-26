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
      image: 'https://via.placeholder.com/400x250/1976d2/ffffff?text=E-Commerce',
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and drag-and-drop functionality.',
      technologies: ['Angular', 'RxJS', 'Firebase', 'Angular CDK'],
      image: 'https://via.placeholder.com/400x250/ff6f00/ffffff?text=Task+Manager',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Advanced analytics dashboard with interactive charts and real-time data visualization.',
      technologies: ['Angular', 'Chart.js', 'REST API', 'Material'],
      image: 'https://via.placeholder.com/400x250/9c27b0/ffffff?text=Analytics',
      github: 'https://github.com/yourusername/project3',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with user profiles, posts, comments, and real-time notifications.',
      technologies: ['Angular', 'NgRx', 'WebSocket', 'Progressive Web App'],
      image: 'https://via.placeholder.com/400x250/00bcd4/ffffff?text=Social+App',
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