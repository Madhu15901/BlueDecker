import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  template: `
  <div class="contact-page">
    <section class="page-hero">
      <div class="cyber-grid-bg"></div>
      <div class="page-hero-orb"></div>
      <div class="container">
        <div class="page-hero-content" scrollReveal>
          <span class="section-label">Get Started</span>
          <h1 class="page-title">Request a <span class="gradient-text">Security Assessment.</span></h1>
          <p class="page-subtitle">Tell us about your environment and we'll scope a security assessment around your actual risk.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-layout">

          <div class="contact-info" scrollReveal>
            <h2 class="info-heading">Why request an assessment?</h2>
            <div class="why-list">
              <div class="why-item" *ngFor="let w of whyPoints">
                <div class="why-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4>{{ w.title }}</h4>
                  <p>{{ w.desc }}</p>
                </div>
              </div>
            </div>
            <div class="contact-details">
              <div class="contact-detail">
                <div class="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p class="detail-label">Email</p>
                  <a href="mailto:contact@bluedecker.io">contact&#64;bluedecker.io</a>
                </div>
              </div>
              <div class="contact-detail">
                <div class="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p class="detail-label">Phone</p>
                  <a href="tel:+918000000000">+91 80000 00000</a>
                </div>
              </div>
              <div class="contact-detail">
                <div class="detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p class="detail-label">Address</p>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper glass-card" scrollReveal [scrollRevealDelay]="2">
            <div *ngIf="!submitted">
              <h3 class="form-title">Send assessment request</h3>
              <p class="form-subtitle">Covered by a mutual NDA from first contact.</p>
              <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" type="text" [(ngModel)]="form.fullName" required placeholder="Arjun Mehta" class="form-input">
                </div>
                <div class="form-group">
                  <label for="email">Work Email *</label>
                  <input id="email" name="email" type="email" [(ngModel)]="form.email" required placeholder="arjun@company.com" class="form-input">
                </div>
                <div class="form-group">
                  <label for="company">Company *</label>
                  <input id="company" name="company" type="text" [(ngModel)]="form.company" required placeholder="Acme Corp" class="form-input">
                </div>
                <div class="form-group">
                  <label for="phone">Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" [(ngModel)]="form.phone" placeholder="+91 98765 43210" class="form-input">
                </div>
                <div class="form-group">
                  <label for="service">Service Required</label>
                  <select id="service" name="service" [(ngModel)]="form.service" class="form-input">
                    <option value="">Select a service…</option>
                    <option *ngFor="let s of serviceOptions" [value]="s">{{ s }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="4" [(ngModel)]="form.message" placeholder="Describe your environment, timeline, and any specific concerns…" class="form-input"></textarea>
                </div>
                <div class="form-consent">
                  <input type="checkbox" id="consent" name="consent" [(ngModel)]="form.consent" required>
                  <label for="consent">I have read the privacy notice and consent to BlueDecker processing the details above so it can respond to me.</label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg submit-btn" [disabled]="!form.consent">
                  Send assessment request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <p class="form-nda-note">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Covered by a mutual NDA from first contact.
                </p>
              </form>
            </div>
            <div *ngIf="submitted" class="form-success">
              <div class="success-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Request received.</h3>
              <p>A senior engineer will contact you within 4 business hours.</p>
              <button class="btn btn-outline" (click)="resetForm()">Submit another request</button>
            </div>
          </div>
        </div>

        <div class="incident-card" scrollReveal>
          <div class="incident-inner">
            <div class="incident-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div class="incident-body">
              <h3>Active security incident?</h3>
              <p>If you are currently under attack or have detected a breach, contact our incident response team directly.</p>
            </div>
            <div class="incident-links">
              <a href="tel:+918000000001" class="incident-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Emergency: +91 80000 00001
              </a>
              <a href="mailto:ir@bluedecker.io" class="incident-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                ir&#64;bluedecker.io
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
  `,
  styles: [`
    .contact-page { padding-top: 80px; }

    .page-hero {
      position: relative;
      padding: 5rem 0 4rem;
      overflow: hidden;
      background: var(--color-surface);
    }

    .page-hero-orb {
      position: absolute;
      width: 700px; height: 400px;
      background: radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%);
      top: 0; right: -200px;
      pointer-events: none;
    }

    .page-hero-content { position: relative; z-index: 1; max-width: 700px; }
    .page-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1rem; }
    .page-subtitle { font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.7; }

    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
      gap: 4rem;
      align-items: flex-start;

      @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 2.5rem; }
    }

    .info-heading { font-size: 1.3rem; font-weight: 800; margin-bottom: 1.5rem; }

    .why-list { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }

    .why-item {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.2rem; }
      p { font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.6; }
    }

    .why-icon {
      width: 32px; height: 32px;
      min-width: 32px;
      border-radius: var(--radius-sm);
      background: rgba(0,208,133,0.12);
      border: 1px solid rgba(0,208,133,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #00D085;
      margin-top: 2px;
    }

    .contact-details { display: flex; flex-direction: column; gap: 1.25rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }

    .contact-detail {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      .detail-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-dim); margin-bottom: 0.1rem; }
      a, span { font-size: 0.9rem; color: var(--color-text-muted); transition: color 0.2s; }
      a:hover { color: var(--color-primary); }
    }

    .detail-icon {
      width: 40px; height: 40px;
      border-radius: var(--radius-sm);
      background: rgba(108,99,255,0.1);
      border: 1px solid rgba(108,99,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
      flex-shrink: 0;
    }

    .contact-form-wrapper { padding: 2.5rem; @media (max-width: 640px) { padding: 1.5rem; } }

    .form-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.3rem; }
    .form-subtitle { font-size: 0.8rem; color: var(--color-text-dim); margin-bottom: 2rem; font-family: var(--font-mono); }
    .contact-form { display: flex; flex-direction: column; gap: 1.1rem; }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      label { font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted); letter-spacing: 0.02em; }
    }

    .form-input {
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      color: var(--color-text);
      font-family: var(--font-body);
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
      outline: none;
      transition: var(--transition-base);
      width: 100%;
      resize: vertical;

      &::placeholder { color: var(--color-text-dim); }
      &:focus { border-color: var(--color-primary); background: rgba(108,99,255,0.06); box-shadow: 0 0 0 3px rgba(108,99,255,0.12); }
      option { background: var(--color-surface); color: var(--color-text); }
    }

    .form-consent {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      input[type="checkbox"] { margin-top: 3px; accent-color: var(--color-primary); flex-shrink: 0; }
      label { font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.55; cursor: pointer; }
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      &:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
    }

    .form-nda-note {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.78rem;
      color: var(--color-text-dim);
      justify-content: center;
      svg { color: var(--color-primary); flex-shrink: 0; }
    }

    .form-success {
      text-align: center;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h3 { font-size: 1.3rem; font-weight: 700; }
      p { font-size: 0.9rem; color: var(--color-text-muted); max-width: 350px; line-height: 1.65; }
    }

    .success-icon {
      width: 72px; height: 72px;
      border-radius: 50%;
      background: rgba(0,208,133,0.15);
      border: 2px solid rgba(0,208,133,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #00D085;
      margin-bottom: 0.5rem;
    }

    .incident-card {
      margin-top: 2.5rem;
      border: 1px solid rgba(255,107,107,0.3);
      border-radius: var(--radius-lg);
      background: rgba(255,107,107,0.05);
      backdrop-filter: var(--glass-blur);
      overflow: hidden;
    }

    .incident-inner {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 1.5rem;
      align-items: center;
      padding: 1.75rem 2rem;

      @media (max-width: 768px) { grid-template-columns: auto 1fr; gap: 1rem; }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .incident-icon {
      width: 48px; height: 48px;
      border-radius: var(--radius-md);
      background: rgba(255,107,107,0.12);
      border: 1px solid rgba(255,107,107,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-danger);
      flex-shrink: 0;
    }

    .incident-body {
      h3 { font-size: 1rem; font-weight: 700; color: var(--color-danger); margin-bottom: 0.25rem; }
      p { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; }
    }

    .incident-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex-shrink: 0;
      @media (max-width: 768px) { grid-column: 1 / -1; flex-direction: row; flex-wrap: wrap; }
    }

    .incident-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-danger);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(255,107,107,0.3);
      background: rgba(255,107,107,0.08);
      transition: var(--transition-fast);
      white-space: nowrap;
      &:hover { background: rgba(255,107,107,0.15); }
    }
  `]
})
export class ContactComponent {
  submitted = false;

  form = { fullName: '', email: '', company: '', phone: '', service: '', message: '', consent: false };

  serviceOptions = [
    'Web Application VAPT', 'Mobile Application VAPT', 'API Security Testing',
    'Network Penetration Test', 'Cloud Pen-testing', 'Secure Code Review',
    'IoT Security Testing', 'Medical Device Security', 'Threat Modeling',
    'Root Cause Analysis', 'Red Teaming', 'Software Composition Analysis',
    'OT Security Testing', 'Vulnerability Disclosure Programme', 'Virtual CISO', 'Startup Security Program',
  ];

  whyPoints = [
    { title: 'Confidential & NDA-protected', desc: 'Mutual NDA from first contact. We never disclose client names or findings.' },
    { title: '4-hour response guarantee', desc: 'A senior engineer contacts you within 4 business hours of your request.' },
    { title: 'No-obligation scoping', desc: 'We map your attack surface and recommend what to test first — no commitment required.' },
  ];

  onSubmit() { this.submitted = true; }
  resetForm() { this.submitted = false; this.form = { fullName: '', email: '', company: '', phone: '', service: '', message: '', consent: false }; }
}
