import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'code' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'work' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'alternate_email' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: 'email' }
  ];

  quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];
}