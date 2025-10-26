import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { fadeIn, slideLeft, slideRight } from '../../shared/animations/animations';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  action?: string;
  actionLabel?: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [fadeIn, slideLeft, slideRight]
})
export class Contact implements OnInit {

  contactForm: FormGroup;
  isSubmitting = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'your.email@example.com',
      action: 'mailto:your.email@example.com',
      actionLabel: 'Send Email'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      actionLabel: 'Call Now'
    },
    {
      icon: 'location_on',
      label: 'Location',
      value: 'San Francisco, CA',
      action: 'https://maps.google.com/?q=San+Francisco,CA',
      actionLabel: 'View on Map'
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: 'code', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: 'work', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: 'alternate_email', url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: 'camera_alt', url: 'https://instagram.com/yourusername' }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }


  ngOnInit(): void {
    this.scrollToTop();
  }
  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);

        this.snackBar.open('✓ Message sent successfully! I\'ll get back to you soon.', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });

        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.setErrors(null);
      this.contactForm.get(key)?.markAsUntouched();
    });
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);

    if (control?.hasError('required')) {
      return 'This field is required';
    }

    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }

    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Minimum ${minLength} characters required`;
    }

    if (control?.hasError('maxlength')) {
      const maxLength = control.errors?.['maxlength'].requiredLength;
      return `Maximum ${maxLength} characters allowed`;
    }

    return '';
  }
}