import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {

  achievements = [
    {
      icon: 'workspace_premium',
      title: '2+ Years of Front-End Experience',
      description: 'Developed and deployed 10+ admin-side and 3 client-side Angular applications for Aldagi and its subsidiaries.'
    },
    {
      icon: 'engineering',
      title: 'Enterprise Angular Development',
      description: 'Built scalable, data-driven interfaces and internal tools using Angular, TypeScript, RxJS, and REST APIs.'
    },
    {
      icon: 'design_services',
      title: 'UX/UI Design Expertise',
      description: 'Designed intuitive interfaces and user flows in Figma, aligning visuals with business goals and usability best practices.'
    },
    {
      icon: 'verified',
      title: 'Agile Collaboration',
      description: 'Worked closely with backend, QA, and design teams under Scrum and Kanban methodologies to deliver high-quality features.'
    }
  ];

  interests = [
    'Angular Architecture',
    'UI/UX Design',
    'Performance Optimization',
    'Clean Code',
    'Data Visualization',
    'Continuous Learning',
    'Problem Solving',
    'Team Collaboration'
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
