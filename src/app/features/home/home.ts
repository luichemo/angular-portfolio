import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  skills = ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Material Design', 'REST APIs'];
}