import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit{
  ngOnInit(): void {
    this.scrollToTop();
  }
  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  interests = ['Web Development', 'UI/UX Design', 'Open Source', 'Clean Code'];
  
  achievements = [
    { icon: 'workspace_premium', title: '5+ Years', description: 'Professional Experience' },
    { icon: 'code', title: '50+ Projects', description: 'Successfully Delivered' },
    { icon: 'groups', title: '20+ Clients', description: 'Worldwide' },
    { icon: 'star', title: '100%', description: 'Client Satisfaction' }
  ];
}