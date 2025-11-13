import { Component, OnInit } from '@angular/core';
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
export class Experience implements OnInit {
  experiences = [
    {
      company: 'Aldagi',
      position: 'Front-End Angular Developer',
      period: '2022 - Present',
      description: `Worked on 10+ admin-side and 3 client-side applications for Aldagi and its subsidiaries, 
      building data-driven, scalable, and user-friendly interfaces with Angular.`,
      responsibilities: [
        'Developed multiple admin-side modules for Greenway, including full CRUD for vehicle data',
        'Built a dynamic vehicle insurance calculator with editable data tables',
        'Designed and delivered a standalone Angular app for real estate insurance calculations',
        'Led frontend development of Aldagi’s commission calculator',
        'Created responsive and accessible UIs using Angular Material, Bootstrap, and Tailwind',
        'Implemented a reusable refresh token service for secure authentication',
        'Customized Keycloak themes to match Aldagi’s branding',
        'Collaborated with backend, UI/UX, and QA teams using Agile (Scrum/Kanban)'
      ],
      technologies: [
        'Angular', 'TypeScript', 'RxJS', 'RESTful API', 'Git', 
        'CI/CD', 'HTML', 'CSS', 'SCSS', 'Angular Material', 'Keycloak'
      ],
      clientProjects: [
        'https://travel.aldagi.ge/',
        'https://onlinemezobloba.aldagi.ge/',
        'https://onlinetravel.aldagi.ge/'
      ]
    },
    {
      company: 'NoneFace (Startup)',
      position: 'Front-End Angular Developer | UX/UI Designer',
      period: '2023 - 2024',
      description: `Developed the entire application independently using Angular and designed 
      the full UX/UI experience in Figma, focusing on usability and consistency.`,
      responsibilities: [
        'Developed a full front-end application using Angular',
        'Designed user-centered layouts and flows in Figma',
        'Ensured clean, scalable, and reusable code structure',
        'Handled all integration with RESTful APIs and deployment pipelines'
      ],
      technologies: [
        'Angular', 'TypeScript', 'RESTful API', 'Git', 'CI/CD', 
        'HTML', 'CSS', 'SCSS', 'Tailwind', 'Figma'
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
