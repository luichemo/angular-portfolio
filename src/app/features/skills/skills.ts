import { Component } from '@angular/core';
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
export class Skills {
  skillCategories = [
    {
      title: 'Frontend',
      icon: 'web',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'RxJS', level: 85 }
      ]
    },
    {
      title: 'State Management',
      icon: 'storage',
      skills: [
        { name: 'NgRx', level: 85 },
        { name: 'Angular Signals', level: 90 },
        { name: 'Redux Pattern', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'build',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'Material Design', level: 92 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'Best Practices',
      icon: 'check_circle',
      skills: [
        { name: 'Clean Code', level: 90 },
        { name: 'Testing', level: 80 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Accessibility', level: 82 }
      ]
    }
  ];
}