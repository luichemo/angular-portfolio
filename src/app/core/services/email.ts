import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';

export interface EmailParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Email {
  
  private serviceId = environment.emailjs.serviceId;
  private templateId = environment.emailjs.templateId;
  private autoReplyTemplateId = environment.emailjs.autoReplyTemplateId; 
  private publicKey = environment.emailjs.publicKey;

  constructor() {
    emailjs.init(this.publicKey);
  }


  async sendEmail(params: EmailParams): Promise<any> {
    try {
      const templateParams = {
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject,
        message: params.message,
        to_name: params.to_name || 'Luka',
        reply_to: params.from_email,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      if (this.autoReplyTemplateId) {
        await this.sendAutoReply(params);
      }

      return {
        success: true,
        message: 'Email sent successfully!',
        response
      };
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
        error
      };
    }
  }


  private async sendAutoReply(params: EmailParams): Promise<any> {
    try {
      const autoReplyParams = {
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject,
        message: params.message,
        to_email: params.from_email,
      };

      await emailjs.send(
        this.serviceId,
        this.autoReplyTemplateId!,
        autoReplyParams
      );

      return { success: true };
    } catch (error: any) {
      console.error('Auto-reply Error:', error);
      return { success: false, error };
    }
  }


  async sendEmailFromForm(formElement: HTMLFormElement): Promise<any> {
    try {
      const response = await emailjs.sendForm(
        this.serviceId,
        this.templateId,
        formElement,
        this.publicKey
      );

      return {
        success: true,
        message: 'Email sent successfully!',
        response
      };
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
        error
      };
    }
  }
}