import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Tier {
  name: string;
  scope: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}

interface ProductTab {
  label: string;
  tiers: Tier[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="pricing-page">

    <section class="page-hero">
      <div class="cyber-grid-bg"></div>
      <div class="page-hero-orb"></div>
      <div class="container">
        <div class="page-hero-content" scrollReveal>
          <span class="section-label">Pricing</span>
          <h1 class="page-title">Priced on what we count.<br><span class="gradient-text">Not on a band you fell into.</span></h1>
          <p class="page-subtitle">Every estate is different. Scope drives price — we count what we're actually testing before we quote.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Products</span>
          <h2 class="section-title">Choose your <span class="gradient-text">product line</span></h2>
        </div>
        <div class="product-tabs" scrollReveal>
          <button class="product-tab" *ngFor="let tab of productTabs; let i = index"
                  [class.active]="activeTab === i"
                  (click)="activeTab = i">
            {{ tab.label }}
          </button>
        </div>
        <div class="pricing-grid" scrollReveal>
          <div class="pricing-card glass-card"
               *ngFor="let tier of productTabs[activeTab].tiers; let i = index"
               [class.highlighted]="tier.highlighted">
            <div class="pricing-badge badge badge-primary" *ngIf="tier.badge">{{ tier.badge }}</div>
            <div class="plan-header">
              <h3 class="plan-name">{{ tier.name }}</h3>
              <p class="plan-scope">{{ tier.scope }}</p>
            </div>
            <div class="plan-price-row">
              <span class="price-contact gradient-text">Contact sales</span>
            </div>
            <ul class="plan-features">
              <li *ngFor="let f of tier.features">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ f }}
              </li>
            </ul>
            <a routerLink="/contact" class="btn" [class.btn-primary]="tier.highlighted" [class.btn-outline]="!tier.highlighted">
              Contact sales
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--color-surface); padding-top: 0;">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Add-ons</span>
          <h2 class="section-title">Attach what you <span class="gradient-text">need</span></h2>
          <p class="section-subtitle">Every add-on bolts on to any plan, quoted on the unit it is counted in.</p>
        </div>
        <div class="addon-table glass-card" scrollReveal>
          <div class="addon-header">
            <span>Add-on</span>
            <span>Pricing</span>
          </div>
          <div class="addon-row" *ngFor="let a of addOns">
            <span class="addon-name">{{ a }}</span>
            <a routerLink="/contact" class="addon-cta">Contact sales →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">FAQ</span>
          <h2 class="section-title">Things buyers <span class="gradient-text">actually ask</span></h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item glass-card" *ngFor="let q of faqs; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 2) + 1">
            <h3 class="faq-q">{{ q.q }}</h3>
            <p class="faq-a">{{ q.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container" style="text-align:center">
        <h2 class="section-title" scrollReveal>Ready to get scoped?</h2>
        <p class="section-subtitle" style="margin: 0 auto 2rem;" scrollReveal>All engagements are covered by a mutual NDA from first contact.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap" scrollReveal>
          <a routerLink="/contact" class="btn btn-primary btn-lg">Request Assessment</a>
          <a routerLink="/services" class="btn btn-outline btn-lg">View All 16 Services</a>
        </div>
      </div>
    </section>

  </div>
  `,
  styles: [`
    .pricing-page { padding-top: 80px; }

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

    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
      .section-label { justify-content: center; }
      .section-subtitle { margin: 0 auto; }
    }

    .product-tabs {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 2.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .product-tab {
      padding: 0.65rem 1.5rem;
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      font-weight: 600;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      cursor: pointer;
      transition: var(--transition-base);

      &:hover { border-color: var(--color-primary); color: var(--color-text); }
      &.active { background: rgba(108,99,255,0.12); border-color: var(--color-primary); color: var(--color-primary); }
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .pricing-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      position: relative;

      &.highlighted {
        border-color: var(--color-primary);
        background: rgba(108,99,255,0.08);
        box-shadow: var(--shadow-card), 0 0 40px rgba(108,99,255,0.2);
      }
    }

    .pricing-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); }

    .plan-name { font-size: 1.1rem; font-weight: 700; }
    .plan-scope { font-size: 0.8rem; color: var(--color-accent); font-family: var(--font-mono); margin-top: 0.2rem; }

    .plan-price-row {
      padding: 0.75rem 0;
      border-top: 1px solid var(--color-border-light);
      border-bottom: 1px solid var(--color-border-light);
    }

    .price-contact { font-size: 1.1rem; font-weight: 800; font-family: var(--font-mono); }

    .plan-features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      flex: 1;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.875rem;
        color: var(--color-text-muted);
        svg { color: var(--color-primary); flex-shrink: 0; margin-top: 2px; }
      }
    }

    .addon-table { padding: 0; overflow: hidden; }

    .addon-header {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      background: rgba(108,99,255,0.08);
      border-bottom: 1px solid var(--color-border);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text-muted);
    }

    .addon-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.9rem 1.5rem;
      border-bottom: 1px solid var(--color-border-light);
      transition: var(--transition-fast);

      &:last-child { border-bottom: none; }
      &:hover { background: rgba(255,255,255,0.02); }
    }

    .addon-name { font-size: 0.875rem; color: var(--color-text-muted); }
    .addon-cta {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-primary);
      white-space: nowrap;
      transition: var(--transition-fast);
      &:hover { opacity: 0.7; }
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;

      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }

    .faq-item { padding: 1.75rem; }
    .faq-q { font-size: 1rem; font-weight: 700; margin-bottom: 0.6rem; }
    .faq-a { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; }
  `]
})
export class PricingComponent {
  activeTab = 0;

  productTabs: ProductTab[] = [
    {
      label: 'VAPT & Pentest',
      tiers: [
        { name: 'Launch', scope: '1 target', features: ['One expert-led VAPT / year', 'Unlimited automated scans', 'Credentialed testing', '1 free retest', 'Formal PDF report + attestation letter'] },
        { name: 'Growth', scope: '3 targets · quarterly', badge: 'Most Chosen', highlighted: true, features: ['4 VAPT cycles / year per target', '3 free retests', 'Cloud config review', 'Jira / Slack / CI-CD integration', 'Named senior lead', 'Threat-modeling workshop'] },
        { name: 'Enterprise', scope: 'Unlimited targets', features: ['Continuous pentesting', 'Red teaming included', 'Active Directory review', 'On-prem deployment option', 'Board-level reporting', '4h breach response SLA'] },
      ]
    },
    {
      label: 'Web App Pentest',
      tiers: [
        { name: 'Starter', scope: 'Up to 10 pages · 2 API endpoints', features: ['OWASP WSTG methodology', 'Manual + automated testing', 'CVSS-rated findings', 'Executive summary', '30-day remediation window'] },
        { name: 'Professional', scope: 'Up to 30 pages · 10 endpoints', badge: 'Most Chosen', highlighted: true, features: ['Business logic testing', 'Authenticated testing (3 roles)', 'API deep-dive', 'CI/CD integration', 'Named senior lead', 'Retest included'] },
        { name: 'Enterprise', scope: 'Unlimited pages & endpoints', features: ['Continuous testing', 'All Professional features', 'Custom test cases', 'Board-level report', '4h breach response SLA'] },
      ]
    },
    {
      label: 'Mobile App Pentest',
      tiers: [
        { name: 'Single Build', scope: '1 Android or iOS', features: ['OWASP MASVS methodology', 'Static + dynamic analysis', 'Frida-based runtime testing', 'Findings report with PoC'] },
        { name: 'Dual Platform', scope: 'Android + iOS', badge: 'Most Chosen', highlighted: true, features: ['Both platforms', 'Backend API testing', 'Deep-link & intent testing', 'Retest included'] },
        { name: 'Enterprise', scope: 'Continuous mobile testing', features: ['Continuous mobile testing', 'Custom threat model', 'Named senior lead', 'Board-level report'] },
      ]
    },
    {
      label: 'Managed SOC',
      tiers: [
        { name: 'Business Hours', scope: 'Up to 50 endpoints', features: ['SIEM integration', 'Business-hours monitoring', 'Weekly threat summary', '4h incident SLA'] },
        { name: '24×7 Pro', scope: 'Recommended', badge: 'Recommended', highlighted: true, features: ['24/7/365 monitoring', 'Custom detection rules', 'MTTD < 3 min', '1h incident SLA', 'Monthly briefing', 'SOAR integration'] },
        { name: 'Enterprise SOC', scope: 'Full-service partnership', features: ['All 24×7 Pro features', 'Dedicated threat hunter', 'On-site analyst option', 'Purple team exercises', 'Board-level reporting', 'Priority IR retainer'] },
      ]
    },
  ];

  addOns = [
    'Additional target',
    'Extra expert retest',
    'Red team engagement',
    'Secure code review',
    'IoT / OT assessment',
    'Phishing simulation',
    'Emergency IR retainer (4h callout)',
    'Root cause analysis',
    'Named account manager',
    'Developer security training',
    'Vulnerability disclosure programme',
    'SBOM & supply-chain monitoring',
    'PCI & PII discovery sweep',
    'On-prem / sovereign deployment',
    'Narada Connect secure collaboration',
  ];

  faqs = [
    { q: 'Why is there no price on the page?', a: 'Every estate is different. Scope drives price: we count what we\'re actually testing before we quote.' },
    { q: 'How do you count what you are testing?', a: 'Infrastructure VAPT counts targets. Web counts pages and endpoints. Mobile counts builds. Cloud counts accounts.' },
    { q: 'What does the report contain?', a: 'Full technical findings, reproducible PoC per finding, CVSS + MITRE ATT&CK mapping, executive summary, attestation letter.' },
    { q: 'How quickly do you start?', a: 'Most assessments begin within 5–7 business days. Emergency breach response within 4 hours.' },
    { q: 'Who does the actual work?', a: 'Senior operators only. Every engagement is led by an experienced offensive-security engineer. No junior-only engagements.' },
    { q: 'Is everything confidential?', a: 'Yes. Mutual NDA from first contact. We never disclose client names or findings.' },
  ];
}
