import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Job {
  title: string;
  type: string;
  location: string;
  dept: string;
  desc: string;
  skills: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="careers-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="cyber-grid-bg"></div>
      <div class="page-hero-orb"></div>
      <div class="container">
        <div class="page-hero-content" scrollReveal>
          <span class="section-label">Careers at BlueDecker</span>
          <h1 class="page-title">Join the team that <span class="gradient-text">breaks things</span> to protect them</h1>
          <p class="page-subtitle">
            We're looking for security practitioners who think like attackers and care about impact. If you're passionate about offensive security, detection engineering, or cloud security — we want to hear from you.
          </p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem;">
            <span class="badge badge-primary" *ngFor="let p of perks">{{ p }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join -->
    <section class="section" style="background: var(--color-surface);">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Life at BlueDecker</span>
          <h2 class="section-title">Why security professionals <span class="gradient-text">choose us</span></h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card glass-card" *ngFor="let b of benefits; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 3) + 1">
            <div class="benefit-icon" [innerHTML]="b.icon"></div>
            <h3>{{ b.title }}</h3>
            <p>{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Roles -->
    <section class="section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Open Positions</span>
          <h2 class="section-title">Current <span class="gradient-text">openings</span></h2>
        </div>

        <div class="jobs-list">
          <div class="job-card glass-card" *ngFor="let job of jobs; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 2) + 1">
            <div class="job-header">
              <div>
                <div class="job-meta">
                  <span class="badge badge-primary">{{ job.dept }}</span>
                  <span class="job-type">{{ job.type }}</span>
                  <span class="job-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {{ job.location }}
                  </span>
                </div>
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="job-desc">{{ job.desc }}</p>
              </div>
              <a routerLink="/contact" class="btn btn-outline btn-sm apply-btn">Apply Now</a>
            </div>
            <div class="job-skills">
              <span class="skill-tag" *ngFor="let s of job.skills">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spontaneous Applications -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="spontaneous-card glass-card" scrollReveal>
          <div class="spontaneous-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <h2>Don't see your role?</h2>
            <p>We're always looking for exceptional security talent. Send us your profile and we'll reach out when the right opportunity opens.</p>
          </div>
          <a href="mailto:careers@bluedecker.io" class="btn btn-primary">
            Send Your Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
  `,
  styles: [`
    .careers-page { padding-top: 80px; }

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

    .page-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 1rem;
    }

    .page-subtitle {
      font-size: 1.1rem;
      color: var(--color-text-muted);
      line-height: 1.7;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
      .section-label { justify-content: center; }
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .benefit-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      h3 { font-size: 1rem; font-weight: 700; }
      p { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; }

      ::ng-deep svg { width: 22px; height: 22px; }
    }

    .benefit-icon {
      width: 48px; height: 48px;
      border-radius: var(--radius-md);
      background: rgba(108, 99, 255, 0.1);
      border: 1px solid rgba(108, 99, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
    }

    .jobs-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .job-card { padding: 1.75rem 2rem; }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 1.25rem;

      @media (max-width: 640px) { flex-direction: column; }
    }

    .job-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-bottom: 0.5rem;
    }

    .job-type {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-accent);
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.2);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
    }

    .job-location {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }

    .job-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }

    .job-desc {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      max-width: 600px;
    }

    .apply-btn { flex-shrink: 0; }

    .job-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-full);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--color-border-light);
      color: var(--color-text-muted);
      font-family: var(--font-mono);
    }

    .spontaneous-card {
      padding: 2.5rem 3rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media (max-width: 768px) { padding: 2rem 1.5rem; }

      h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem; }
      p { font-size: 0.9rem; color: var(--color-text-muted); max-width: 450px; }
    }

    .spontaneous-icon {
      width: 64px; height: 64px;
      min-width: 64px;
      border-radius: var(--radius-md);
      background: rgba(108, 99, 255, 0.1);
      border: 1px solid rgba(108, 99, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
    }

    .btn { margin-left: auto; @media (max-width: 768px) { margin-left: 0; } }
  `]
})
export class CareersComponent {
  perks = ['Remote-first', 'Competitive pay', 'Learning budget', 'Flexible hours', 'Research time'];

  benefits = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`,
      title: 'Work on Real Adversary Research',
      desc: 'You\'ll contribute to proprietary tooling and adversary simulations — not just running commodity scanners.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      title: 'Supportive Team Culture',
      desc: 'We celebrate learning from mistakes, share knowledge freely, and back our team to grow professionally.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      title: '₹1L Annual Learning Budget',
      desc: 'Certifications (OSCP, CRTE, GCFA, etc.), conferences, training courses — we invest in your growth.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      title: 'Flexible Work Hours',
      desc: 'We care about output, not hours. Work when you\'re most productive — async-first culture.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Remote-First',
      desc: 'Work from anywhere in India. Optional co-working allowance for those who prefer an office environment.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Impact from Day One',
      desc: 'No warm-up period. You\'ll be working on real client engagements from your first week.'
    },
  ];

  jobs: Job[] = [
    {
      title: 'Senior Penetration Tester',
      dept: 'Offensive Security',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Lead VAPT engagements across infrastructure, web, and API targets. Contribute to internal tooling development.',
      skills: ['Burp Suite Pro', 'Metasploit', 'Python', 'Networking', 'OWASP', 'OSCP or equivalent']
    },
    {
      title: 'Red Team Operator',
      dept: 'Red Team',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Conduct full-scope adversary simulations including physical, social, and technical attack vectors.',
      skills: ['C2 Frameworks', 'AD Attacks', 'Social Engineering', 'CRTO / CRTE', 'Physical Security']
    },
    {
      title: 'Detection Engineer (SOC)',
      dept: 'Detection Engineering',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Build and tune detection rules, develop threat hunting playbooks, and respond to incidents within our managed SOC.',
      skills: ['SIEM (Splunk/Elastic)', 'MITRE ATT&CK', 'KQL / SPL', 'Threat Hunting', 'GCIA / GCFA']
    },
    {
      title: 'Cloud Security Engineer',
      dept: 'Cloud Security',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Perform cloud security assessments across AWS, Azure, and GCP. Develop automation for cloud security posture management.',
      skills: ['AWS / Azure / GCP', 'Terraform', 'IAM', 'Kubernetes', 'Python', 'CCSP / AWS-SAA']
    },
    {
      title: 'Application Security Engineer',
      dept: 'AppSec',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Conduct code reviews, web and API security testing, and work with development teams to embed security into the SDLC.',
      skills: ['SAST/DAST', 'OWASP Top 10', 'Java/Python/Go', 'GraphQL', 'CI/CD Security']
    },
    {
      title: 'Threat Intelligence Analyst',
      dept: 'Threat Intel',
      type: 'Full-time',
      location: 'Remote, India',
      desc: 'Monitor and analyze threat actor activity, produce sector-specific intelligence reports, and manage client-facing intel feeds.',
      skills: ['OSINT', 'Dark web research', 'MITRE ATT&CK', 'Maltego', 'CTI frameworks']
    },
  ];
}
