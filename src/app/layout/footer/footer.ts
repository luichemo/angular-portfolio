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
    { name: 'GitHub', url: 'https://github.com/luichemo', icon: 'bi-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luka-chemia-a0a339236/', icon: 'bi-linkedin' },
    { name: 'facebook', url: 'https://www.facebook.com/lukaa2002/', icon: 'bi-facebook' },
    { name: 'Email', url: 'mailto:luka.chemia001@gmail.com', icon: 'bi-envelope' }
  ];

  quickLinks = [
    { label: 'About', path: '/about', icon: 'bi-person' },
    { label: 'Skills', path: '/skills', icon: 'bi-tools' },
    { label: 'Projects', path: '/projects', icon: 'bi-folder' },
    { label: 'Contact', path: '/contact', icon: 'bi-chat-dots' }
  ];
}