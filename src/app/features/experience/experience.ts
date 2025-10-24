import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Angular Developer',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-level web applications using Angular, NgRx, and modern web technologies.',
      responsibilities: [
        'Architecting and developing scalable Angular applications',
        'Mentoring junior developers and code reviews',
        'Implementing state management with NgRx',
        'Optimizing application performance'
      ]
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Angular Developer',
      period: '2020 - 2022',
      description: 'Developed multiple client-facing applications and internal tools using Angular and Material Design.',
      responsibilities: [
        'Building responsive web applications',
        'Integrating REST APIs and WebSocket connections',
        'Writing unit and e2e tests',
        'Collaborating with UX/UI designers'
      ]
    },
    {
      company: 'StartUp Co.',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Worked on various projects using modern JavaScript frameworks and technologies.',
      responsibilities: [
        'Developing user interfaces with Angular',
        'Implementing responsive designs',
        'Working with RESTful APIs',
        'Participating in agile development processes'
      ]
    }
  ];
}