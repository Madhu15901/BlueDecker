import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface TeamMember { name: string; role: string; bio: string; initials: string; tags: string[]; }
interface Value { icon: string; title: string; desc: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="about-page">
    <section class="page-hero">
      <div class="cyber-grid-bg"></div>
      <div class="page-hero-orb"></div>
      <div class="container">
        <div class="page-hero-content" scrollReveal>
          <span class="section-label">Our Story</span>
          <h1 class="page-title">Security built on <span class="gradient-text">integrity & precision</span></h1>
          <p class="page-subtitle">BlueDecker was founded by offensive security researchers who were tired of the industry's opacity — inflated quotes, vague scope, and reports that gather dust. We set out to build it differently.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card glass-card" scrollReveal>
            <div class="mission-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To democratise access to world-class offensive security — transparent, bounded, and priced fairly for enterprises of all sizes.</p>
          </div>
          <div class="mission-card glass-card" scrollReveal [scrollRevealDelay]="2">
            <div class="mission-icon accent">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p>A world where every enterprise can confidently defend itself against sophisticated adversaries — with the same tools and talent as Fortune 500 companies.</p>
          </div>
          <div class="mission-card glass-card" scrollReveal [scrollRevealDelay]="3">
            <div class="mission-icon danger">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Our Edge</h3>
            <p>We build our own security tools. No commodity scanners — just purpose-built attack and detection engineering powered by real adversary research.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="stats-row">
          <div class="stat-item" *ngFor="let s of stats" scrollReveal>
            <div class="stat-value gradient-text">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Why BlueDecker</span>
          <h2 class="section-title">Six reasons clients <span class="gradient-text">stay</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card glass-card" *ngFor="let v of values; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 3) + 1">
            <div class="value-icon" [innerHTML]="v.icon"></div>
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--color-surface);">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Leadership</span>
          <h2 class="section-title">Meet the <span class="gradient-text">team</span></h2>
          <p class="section-subtitle">Security practitioners who have spent years on both sides of the attack-defend equation.</p>
        </div>

        <div class="founder-quote glass-card" scrollReveal>
          <div class="quote-mark">"</div>
          <blockquote>We kept seeing the same pattern: a report handed over, a list of findings, and nobody left to actually fix them. BlueDecker exists to close that gap: we test it, we explain it, and we stay on it until it is patched.</blockquote>
          <div class="quote-author">
            <div class="author-avatar">VR</div>
            <div>
              <div class="author-name">Vikram Reddy</div>
              <div class="author-role">Founder & Head of Offensive Security</div>
            </div>
          </div>
        </div>

        <div class="team-grid">
          <div class="team-card glass-card" *ngFor="let m of team; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 3) + 1">
            <div class="team-avatar">{{ m.initials }}</div>
            <h3 class="team-name">{{ m.name }}</h3>
            <p class="team-role">{{ m.role }}</p>
            <p class="team-bio">{{ m.bio }}</p>
            <div class="team-tags">
              <span class="badge badge-primary" *ngFor="let t of m.tags">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="gov-banner glass-card" scrollReveal>
          <div class="gov-content">
            <span class="section-label">Governance & Transparency</span>
            <h2>We operate with <span class="gradient-text">full transparency</span></h2>
            <p>Leadership roles, operational reporting cadences, and governance standards are disclosed to all clients. No hidden structures.</p>
            <div class="gov-items">
              <div class="gov-item" *ngFor="let g of govItems">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ g }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container" style="text-align:center">
        <h2 class="section-title" scrollReveal>Ready to work with us?</h2>
        <p class="section-subtitle" style="margin:0 auto 2rem" scrollReveal>Request a confidential assessment or speak to one of our security experts.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap" scrollReveal>
          <a routerLink="/contact" class="btn btn-primary btn-lg">Get in Touch</a>
          <a routerLink="/careers" class="btn btn-outline btn-lg">Join the Team</a>
        </div>
      </div>
    </section>
  </div>
  `,
  styles: [`
    .about-page { padding-top: 80px; }

    .page-hero { position: relative; padding: 5rem 0 4rem; overflow: hidden; background: var(--color-surface); }
    .page-hero-orb { position: absolute; width: 700px; height: 400px; background: radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%); top: 0; right: -200px; pointer-events: none; }
    .page-hero-content { position: relative; z-index: 1; max-width: 700px; }
    .page-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1rem; }
    .page-subtitle { font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.7; }

    .mission-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; @media (max-width: 768px) { grid-template-columns: 1fr; } }

    .mission-card {
      padding: 2.25rem; display: flex; flex-direction: column; gap: 1rem;
      h3 { font-size: 1.1rem; font-weight: 700; }
      p { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.65; }
    }

    .mission-icon {
      width: 56px; height: 56px; border-radius: var(--radius-md);
      background: rgba(108,99,255,0.15); border: 1px solid rgba(108,99,255,0.25);
      display: flex; align-items: center; justify-content: center; color: var(--color-primary);
      &.accent { background: rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.25); color: var(--color-accent); }
      &.danger { background: rgba(255,107,107,0.1); border-color: rgba(255,107,107,0.25); color: var(--color-danger); }
    }

    .stats-section { background: var(--color-surface); padding: 3rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
    .stats-row { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 2rem; }
    .stat-item { text-align: center; }
    .stat-value { font-size: 3rem; font-weight: 800; font-family: var(--font-mono); letter-spacing: -0.04em; }
    .stat-label { font-size: 0.85rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.06em; }

    .section-header { text-align: center; margin-bottom: 3rem; .section-label { justify-content: center; } .section-subtitle { margin: 0 auto; } }

    .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 640px) { grid-template-columns: 1fr; } }

    .value-card { padding: 2rem; display: flex; flex-direction: column; gap: 0.75rem; ::ng-deep svg { width: 24px; height: 24px; } }
    .value-icon { width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(108,99,255,0.1); border: 1px solid rgba(108,99,255,0.2); display: flex; align-items: center; justify-content: center; color: var(--color-primary); }
    .value-title { font-size: 1rem; font-weight: 700; }
    .value-desc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; }

    .founder-quote { padding: 2.5rem; margin-bottom: 2.5rem; }
    .quote-mark { font-size: 5rem; font-weight: 900; color: var(--color-primary); opacity: 0.2; line-height: 1; margin-bottom: -1rem; font-family: Georgia, serif; }
    blockquote { font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.75; max-width: 760px; margin-bottom: 1.5rem; font-style: italic; }
    .quote-author { display: flex; align-items: center; gap: 0.75rem; }
    .author-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700; color: white; flex-shrink: 0; }
    .author-name { font-size: 0.95rem; font-weight: 700; }
    .author-role { font-size: 0.8rem; color: var(--color-text-muted); }

    .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 640px) { grid-template-columns: 1fr; } }
    .team-card { padding: 2rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.6rem; }
    .team-avatar { width: 72px; height: 72px; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; color: white; margin-bottom: 0.5rem; box-shadow: 0 0 25px rgba(108,99,255,0.35); }
    .team-name { font-size: 1.05rem; font-weight: 700; }
    .team-role { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-accent); }
    .team-bio { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; }
    .team-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin-top: 0.5rem; }

    .gov-banner { padding: 3rem; @media (max-width: 640px) { padding: 2rem 1.5rem; } }
    .gov-content {
      h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; margin: 0.5rem 0 1rem; }
      p { font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; max-width: 600px; margin-bottom: 1.5rem; }
    }
    .gov-items { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; @media (max-width: 640px) { grid-template-columns: 1fr; } }
    .gov-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; color: var(--color-text-muted); svg { color: var(--color-primary); flex-shrink: 0; } }
  `]
})
export class AboutComponent {
  stats = [
    { value: '2021', label: 'Founded' },
    { value: '10+', label: 'Enterprise Clients Secured' },
    { value: '4+', label: 'Years Excellence' },
    { value: '0', label: 'Client Breaches' },
  ];

  values: Value[] = [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`, title: 'In-House Tools in Production', desc: 'LogVeda SIEM, ANPTOP, WafLynk, Narada Connect, and HAWK-EYE — built by us and running in live client environments.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, title: 'Senior Operators Only', desc: 'Every engagement is led by an experienced offensive-security engineer. No junior-only work, ever.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>`, title: 'Transparent Methodology', desc: 'OWASP WSTG · PTES · NIST SP 800-115 · MITRE ATT&CK. Every finding is traceable to a specific test case.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, title: '5–10 Day Turnaround', desc: 'Most assessments begin within 5–7 business days. We deliver findings fast so you can remediate fast.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: 'Named Senior Lead', desc: 'You always know who is doing your test. One named senior engineer owns your engagement end-to-end.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`, title: 'Proof Not Theory', desc: 'Every finding ships with a reproducible proof of concept. No vague risk ratings — just exploitable evidence.' },
  ];

  team: TeamMember[] = [
    { name: 'Vikram Reddy', role: 'Founder & Head of Offensive Security', bio: '15 years in red teaming and adversary simulation. Former security researcher at CERT-In. CVE contributor.', initials: 'VR', tags: ['Red Team', 'Exploit Dev', 'CVE Research'] },
    { name: 'Ananya Krishnan', role: 'Head of Detection Engineering', bio: 'Built detection stacks for Fortune 500 companies. Specializes in SIEM rule development and threat hunting.', initials: 'AK', tags: ['SIEM', 'Threat Hunting', 'DFIR'] },
    { name: 'Rohan Bose', role: 'Head of Cloud Security', bio: 'AWS / Azure / GCP certified. Led cloud security programs for major banking and fintech clients.', initials: 'RB', tags: ['AWS', 'IAM', 'DevSecOps'] },
    { name: 'Priya Subramaniam', role: 'Head of AppSec', bio: 'OWASP contributor. Specialist in web application security, API testing, and secure SDLC implementation.', initials: 'PS', tags: ['OWASP', 'API Sec', 'SAST'] },
    { name: 'Kiran Malhotra', role: 'Head of GRC & Compliance', bio: 'CISM, CISSP. Guides clients through ISO 27001, DPDPA, and RBI cybersecurity framework compliance.', initials: 'KM', tags: ['ISO 27001', 'DPDPA', 'CISM'] },
    { name: 'Deepa Venkatesh', role: 'Head of Threat Intelligence', bio: 'Dark web researcher and threat actor profiler with 10 years tracking APT groups targeting Indian enterprises.', initials: 'DV', tags: ['APT Research', 'OSINT', 'Dark Web'] },
  ];

  govItems = ['Published leadership org chart', 'Quarterly security operations review', 'Conflict of interest disclosures', 'Incident notification SLA < 4h', 'Client data handling policy', 'Responsible disclosure program'];
}
