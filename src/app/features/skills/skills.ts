import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: 'code',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'RxJS', level: 85 },
        { name: 'NgRx', level: 82 }
      ]
    },
    {
      title: 'Styling & UI',
      icon: 'palette',
      skills: [
        { name: 'SCSS / CSS / HTML', level: 92 },
        { name: 'Angular Material', level: 90 },
        { name: 'Tailwind', level: 88 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Figma (UI/UX Design)', level: 80 }
      ]
    },
    {
      title: 'Tools & Practices',
      icon: 'build',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'CI/CD', level: 85 },
        { name: 'RESTful API Integration', level: 90 },
        { name: 'Keycloak (Auth & Theming)', level: 88 }
      ]
    },
    {
      title: 'Work Methodologies',
      icon: 'group_work',
      skills: [
        { name: 'Agile', level: 90 },
        { name: 'SCRUM', level: 88 },
        { name: 'Kanban', level: 85 },
        { name: 'Team Collaboration', level: 92 }
      ]
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
