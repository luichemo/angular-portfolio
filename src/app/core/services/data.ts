import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, filter, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  private searchSubject = new BehaviorSubject<string>('');
  public search$ = this.searchSubject.asObservable().pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return of([
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform',
        technologies: ['Angular', 'NgRx', 'Material']
      },
      {
        id: 2,
        title: 'Task Manager',
        description: 'Collaborative task management',
        technologies: ['Angular', 'RxJS', 'Firebase']
      }
    ]).pipe(
      map(projects => projects.filter(p => p.technologies.length > 0)),
      catchError(error => {
        console.error('Error fetching projects:', error);
        return of([]);
      })
    );
  }

  searchProjects(term: string): void {
    this.searchSubject.next(term);
  }

  filterProjectsByTechnology(tech: string): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.filter(p => 
        p.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
      ))
    );
  }
}