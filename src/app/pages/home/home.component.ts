import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="home">

    <!-- ===================== HERO ===================== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="cyber-grid-bg"></div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <div class="container hero-container">
        <div class="hero-badge badge badge-primary">
          <span class="badge-dot"></span>
          Offensive Security · Built In-House
        </div>
        <h1 class="hero-title">
          BlueDecker delivers VAPT, managed SOC and red teaming to
          <span class="gradient-text">fortify your digital empire.</span>
        </h1>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary btn-lg">
            Request Assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a routerLink="/contact" class="btn btn-outline btn-lg">Report an Incident</a>
        </div>
        <div class="hero-pills">
          <span class="hero-pill" *ngFor="let p of heroPills">{{ p }}</span>
        </div>
      </div>
      <div class="hero-scroll-hint"><div class="scroll-indicator"></div></div>
    </section>

    <!-- ===================== MARQUEE ===================== -->
    <section class="marquee-section">
      <p class="marquee-label">Trusted by</p>
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <span class="marquee-item" *ngFor="let c of marqueeClients">{{ c }}</span>
          <span class="marquee-item" *ngFor="let c of marqueeClients">{{ c }}</span>
        </div>
      </div>
    </section>

    <!-- ===================== WHY SPEND DISAPPOINTS ===================== -->
    <section class="section problem-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Honest Assessment</span>
          <h2 class="section-title">You have probably paid for this before.<br><span class="gradient-text">Here is what went wrong last time,</span> and what we do instead.</h2>
        </div>
        <div class="problem-grid">
          <div class="problem-row glass-card" *ngFor="let p of problems; let i = index" scrollReveal [scrollRevealDelay]="(i % 2) + 1">
            <div class="problem-side">
              <span class="side-label before-label">Before</span>
              <p class="problem-text">{{ p.problem }}</p>
            </div>
            <div class="problem-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div class="solution-side">
              <span class="side-label after-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                BlueDecker
              </span>
              <p class="solution-text">{{ p.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 16 SERVICES ===================== -->
    <section class="section services-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Full Coverage</span>
          <h2 class="section-title">16 services. <span class="gradient-text">One partner.</span></h2>
        </div>
        <div class="services-num-grid">
          <div class="svc-num-card glass-card" *ngFor="let s of services16; let i = index" scrollReveal [scrollRevealDelay]="(i % 4) + 1">
            <span class="svc-num">{{ s.num }}</span>
            <h3 class="svc-name">{{ s.title }}</h3>
            <span class="svc-tag">{{ s.tag }}</span>
          </div>
        </div>
        <div class="services-cta" scrollReveal>
          <a routerLink="/contact" class="btn btn-primary btn-lg">
            Request Assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a routerLink="/contact" class="btn btn-outline btn-lg">Need a scoping call?</a>
        </div>
      </div>
    </section>

    <!-- ===================== IN-HOUSE TOOLS ===================== -->
    <section class="section tools-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Proprietary Platform</span>
          <h2 class="section-title">5 tools we built to make <span class="gradient-text">hard things effortless.</span></h2>
        </div>
        <div class="tools-tabs" scrollReveal>
          <button class="tool-pill" *ngFor="let t of tools; let i = index"
                  [class.active]="activeTool === i"
                  (click)="activeTool = i">
            <span class="tool-pill-cat">{{ t.cat }}</span>
            {{ t.name }}
          </button>
        </div>
        <div class="tool-detail glass-card" scrollReveal>
          <div class="tool-detail-header">
            <div>
              <span class="badge badge-accent">{{ tools[activeTool].cat }}</span>
              <h3 class="tool-detail-name">{{ tools[activeTool].name }}</h3>
              <p class="tool-detail-desc">{{ tools[activeTool].desc }}</p>
            </div>
          </div>
          <ul class="tool-capabilities">
            <li *ngFor="let cap of tools[activeTool].caps">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ cap }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===================== REAL-TIME DEFENSE ===================== -->
    <section class="section defense-section">
      <div class="cyber-grid-bg"></div>
      <div class="container defense-container">
        <div class="defense-left" scrollReveal>
          <span class="section-label">Layered Defense</span>
          <h2 class="section-title">Every attack stopped <span class="gradient-text">at the gate.</span></h2>
          <ol class="defense-steps">
            <li *ngFor="let s of defenseSteps">
              <span class="step-num">{{ s.num }}</span>
              <span class="step-text">{{ s.text }}</span>
            </li>
          </ol>
        </div>
        <div class="defense-right" scrollReveal [scrollRevealDelay]="2">
          <div class="defense-stat-card glass-card">
            <div class="defense-stat" *ngFor="let s of defenseStats">
              <span class="d-stat-value gradient-text">{{ s.value }}</span>
              <span class="d-stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== INDUSTRIES ===================== -->
    <section class="section industries-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Verticals</span>
          <h2 class="section-title">Sector-specific <span class="gradient-text">expertise.</span></h2>
        </div>
        <div class="industries-grid">
          <div class="industry-card glass-card" *ngFor="let ind of industries; let i = index" scrollReveal [scrollRevealDelay]="(i % 4) + 1">
            <div class="industry-icon" [innerHTML]="ind.icon"></div>
            <h3 class="industry-title">{{ ind.title }}</h3>
            <p class="industry-desc">{{ ind.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== METHODOLOGY ===================== -->
    <section class="section methodology-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Standards</span>
          <h2 class="section-title">Testing you can <span class="gradient-text">audit.</span></h2>
        </div>
        <div class="framework-badges" scrollReveal>
          <span class="framework-badge" *ngFor="let f of frameworks">{{ f }}</span>
        </div>
        <p class="methodology-note" scrollReveal>
          We do not run a proprietary black box. Every finding is traceable back to a specific test case, with a reproducible proof of concept attached.
        </p>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="section cta-section" scrollReveal>
      <div class="container">
        <div class="cta-card glass-card">
          <div class="cta-bg">
            <div class="cyber-grid-bg"></div>
            <div class="cta-orb cta-orb-1"></div>
            <div class="cta-orb cta-orb-2"></div>
          </div>
          <div class="cta-content">
            <h2 class="cta-title">Secure your digital assets with <span class="gradient-text">BlueDecker.</span></h2>
            <p class="cta-subtitle">Thirty-minute scoping call. No sales theatre. We'll tell you what to test first, even if you don't end up working with us.</p>
            <div class="cta-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">
                Book Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a routerLink="/pricing" class="btn btn-outline btn-lg">See Plans</a>
            </div>
            <p class="cta-note">Average response · under 3 working hours</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  `,
  styles: [`
    .home { padding-top: 0; }

    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }

    .hero-bg { position: absolute; inset: 0; z-index: 0; }

    .hero-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
    }

    .hero-orb-1 {
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%);
      top: -200px; left: -100px;
      animation: orbFloat 8s ease-in-out infinite alternate;
    }

    .hero-orb-2 {
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
      top: 100px; right: -150px;
      animation: orbFloat 10s ease-in-out infinite alternate-reverse;
    }

    .hero-orb-3 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%);
      bottom: -100px; left: 30%;
      animation: orbFloat 12s ease-in-out infinite alternate;
    }

    @keyframes orbFloat {
      from { transform: translate(0, 0) scale(1); }
      to { transform: translate(30px, -30px) scale(1.05); }
    }

    .hero-container {
      position: relative;
      z-index: 1;
      padding-top: 9rem;
      padding-bottom: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.75rem;
      max-width: 860px;
    }

    .hero-badge { animation: fadeInDown 0.8s ease both; }

    .badge-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--color-accent);
      animation: pulse 2s infinite;
      flex-shrink: 0;
    }

    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    .hero-title {
      font-size: clamp(2.2rem, 5.5vw, 4rem);
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.04em;
      animation: fadeInUp 0.9s ease 0.1s both;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      animation: fadeInUp 0.9s ease 0.2s both;
    }

    .hero-pills {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      animation: fadeInUp 0.9s ease 0.3s both;
    }

    .hero-pill {
      padding: 0.35rem 1rem;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      font-family: var(--font-mono);
    }

    .hero-scroll-hint {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    .scroll-indicator {
      width: 24px; height: 40px;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-full);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 6px; left: 50%;
        transform: translateX(-50%);
        width: 4px; height: 8px;
        background: var(--color-primary);
        border-radius: var(--radius-full);
        animation: scrollBounce 2s ease infinite;
      }
    }

    @keyframes scrollBounce {
      0%, 100% { top: 6px; opacity: 1; }
      50% { top: 18px; opacity: 0.3; }
    }

    .marquee-section {
      padding: 1.75rem 0;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      background: var(--color-surface);
      overflow: hidden;
    }

    .marquee-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-text-dim);
      text-align: center;
      margin-bottom: 1rem;
    }

    .marquee-wrapper { overflow: hidden; }

    .marquee-track {
      display: flex;
      gap: 4rem;
      width: max-content;
      animation: marquee 20s linear infinite;
    }

    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .marquee-item {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-text-dim);
      white-space: nowrap;
      font-family: var(--font-mono);
    }

    .problem-section { background: var(--color-bg); }

    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;
      .section-label { justify-content: center; }
      .section-title { max-width: 820px; margin: 0 auto 1rem; }
    }

    .problem-grid { display: flex; flex-direction: column; gap: 1rem; }

    .problem-row {
      display: grid;
      grid-template-columns: 1fr 40px 1fr;
      gap: 1.5rem;
      align-items: center;
      padding: 1.5rem 2rem;

      @media (max-width: 768px) { grid-template-columns: 1fr; gap: 0.75rem; }
    }

    .side-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .before-label { color: var(--color-text-dim); }
    .after-label { color: var(--color-accent); }

    .problem-text {
      font-size: 0.9rem;
      color: var(--color-text-dim);
      line-height: 1.6;
      font-style: italic;
    }

    .solution-text {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.6;
    }

    .problem-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
      @media (max-width: 768px) { display: none; }
    }

    .services-section { background: var(--color-surface); }

    .services-num-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;

      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .svc-num-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .svc-num {
      font-size: 0.75rem;
      font-family: var(--font-mono);
      font-weight: 700;
      color: var(--color-primary);
      letter-spacing: 0.06em;
    }

    .svc-name { font-size: 0.95rem; font-weight: 700; line-height: 1.3; }
    .svc-tag { font-size: 0.75rem; color: var(--color-text-dim); font-family: var(--font-mono); }

    .services-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2.5rem;
      flex-wrap: wrap;
    }

    .tools-section { background: var(--color-bg); }

    .tools-tabs {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      justify-content: center;
    }

    .tool-pill {
      padding: 0.5rem 1.25rem;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      cursor: pointer;
      transition: var(--transition-base);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.1rem;

      &:hover { border-color: var(--color-primary); color: var(--color-text); }
      &.active { background: rgba(108,99,255,0.12); border-color: var(--color-primary); color: var(--color-primary); }
    }

    .tool-pill-cat {
      font-size: 0.6rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-text-dim);
    }

    .tool-pill.active .tool-pill-cat { color: var(--color-primary); }

    .tool-detail {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media (max-width: 640px) { padding: 1.5rem; }
    }

    .tool-detail-name { font-size: 1.5rem; font-weight: 800; margin: 0.5rem 0 0.25rem; }
    .tool-detail-desc { font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; }

    .tool-capabilities {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.6rem;

      @media (max-width: 640px) { grid-template-columns: 1fr; }

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.875rem;
        color: var(--color-text-muted);
        svg { color: var(--color-accent); flex-shrink: 0; margin-top: 2px; }
      }
    }

    .defense-section {
      background: var(--color-surface);
      position: relative;
      overflow: hidden;
    }

    .defense-container {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 5rem;
      align-items: center;
      position: relative;
      z-index: 1;

      @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 3rem; }
    }

    .defense-steps {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-top: 2rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 20px; top: 0; bottom: 0;
        width: 1px;
        background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
        opacity: 0.3;
      }

      li {
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
        padding: 1rem 0;
        position: relative;
      }
    }

    .step-num {
      width: 40px; height: 40px;
      min-width: 40px;
      border-radius: 50%;
      background: var(--color-surface);
      border: 1px solid rgba(108,99,255,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      font-family: var(--font-mono);
      color: var(--color-primary);
      position: relative;
      z-index: 1;
    }

    .step-text {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      padding-top: 0.6rem;
    }

    .defense-stat-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .defense-stat {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--color-border-light);
      &:last-child { border-bottom: none; padding-bottom: 0; }
    }

    .d-stat-value { font-size: 2rem; font-weight: 800; font-family: var(--font-mono); }
    .d-stat-label { font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.06em; }

    .industries-section { background: var(--color-bg); }

    .industries-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;

      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .industry-card {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      ::ng-deep svg { width: 28px; height: 28px; }
    }

    .industry-icon {
      width: 52px; height: 52px;
      border-radius: var(--radius-md);
      background: rgba(108,99,255,0.1);
      border: 1px solid rgba(108,99,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
    }

    .industry-title { font-size: 0.95rem; font-weight: 700; }
    .industry-desc { font-size: 0.82rem; color: var(--color-text-dim); line-height: 1.55; }

    .methodology-section { background: var(--color-surface); }

    .framework-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .framework-badge {
      padding: 0.5rem 1.25rem;
      border-radius: var(--radius-full);
      background: rgba(0,212,255,0.08);
      border: 1px solid rgba(0,212,255,0.2);
      color: var(--color-accent);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-family: var(--font-mono);
    }

    .methodology-note {
      text-align: center;
      font-size: 0.95rem;
      color: var(--color-text-muted);
      max-width: 640px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .cta-section { background: var(--color-bg); }

    .cta-card {
      position: relative;
      padding: 4.5rem 3rem;
      text-align: center;
      overflow: hidden;
      @media (max-width: 640px) { padding: 2.5rem 1.5rem; }
    }

    .cta-bg { position: absolute; inset: 0; z-index: 0; }

    .cta-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
    }

    .cta-orb-1 { width: 400px; height: 400px; background: rgba(108,99,255,0.12); top: -100px; left: -100px; }
    .cta-orb-2 { width: 300px; height: 300px; background: rgba(0,212,255,0.08); bottom: -50px; right: -50px; }

    .cta-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }

    .cta-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; letter-spacing: -0.03em; max-width: 640px; }
    .cta-subtitle { font-size: 1rem; color: var(--color-text-muted); max-width: 540px; line-height: 1.7; }
    .cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .cta-note { font-size: 0.8rem; color: var(--color-text-dim); font-family: var(--font-mono); }

    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class HomeComponent {
  heroPills = ['10+ Enterprise Clients', '10,000+ Threats Blocked', '4+ Years Excellence', '99.9% Retention'];

  marqueeClients = ['Digital Asset Management Token', 'Green Land Hostels', 'Madras Sarees', 'Vexorion Quantum AI'];

  problems = [
    { problem: 'A 200-page PDF lands, and nothing changes.', solution: 'Findings arrive with a reproducible PoC and a named engineer who re-tests the fix.' },
    { problem: 'The scanner found 4,000 issues. Which two matter?', solution: 'Every finding rated on real reachability and chained impact, not raw CVSS.' },
    { problem: 'Your last pentest was eleven months ago.', solution: 'Continuous automated coverage between expert-led cycles.' },
    { problem: 'Nobody can say which APIs are live.', solution: 'We discover the surface from traffic, bundles and mobile binaries, shadow endpoints included.' },
    { problem: 'The report was too vague to act on.', solution: 'OWASP, PTES and NIST methodology, every finding mapped to MITRE ATT&CK.' },
    { problem: 'Six tools, six dashboards, no single answer.', solution: 'One platform we wrote ourselves. Edge blocks show up in the SIEM as context.' },
  ];

  services16 = [
    { num: '01', title: 'Web Application VAPT', tag: 'OWASP Top 10 + business logic' },
    { num: '02', title: 'Mobile Application VAPT', tag: 'iOS · Android · Frida-led' },
    { num: '03', title: 'API Security Testing', tag: 'REST · GraphQL · gRPC' },
    { num: '04', title: 'Network Penetration Test', tag: 'Internal & external paths' },
    { num: '05', title: 'Cloud Pen-testing', tag: 'AWS · Azure · GCP' },
    { num: '06', title: 'Secure Code Review', tag: 'Manual + SAST baseline' },
    { num: '07', title: 'IoT Security Testing', tag: 'Firmware · radio · hardware' },
    { num: '08', title: 'Medical Device Security', tag: 'Firmware · clinical network · SBOM' },
    { num: '09', title: 'Threat Modeling', tag: 'STRIDE · PASTA workshops' },
    { num: '10', title: 'Root Cause Analysis', tag: 'Post-incident forensics' },
    { num: '11', title: 'Red Teaming', tag: 'Goal-based adversary emulation' },
    { num: '12', title: 'Software Composition', tag: 'SCA + license + reachability' },
    { num: '13', title: 'OT Security Testing', tag: 'ICS · SCADA · Purdue model' },
    { num: '14', title: 'Vulnerability Disclosure', tag: 'VDP · bug-bounty program' },
    { num: '15', title: 'Virtual CISO', tag: 'Fractional security leadership' },
    { num: '16', title: 'Startup Security Program', tag: 'Pre-seed → Series A · 90 days' },
  ];

  activeTool = 0;

  tools = [
    {
      name: 'LogVeda SIEM', cat: 'SIEM/DETECTION',
      desc: 'A modern SIEM built from scratch.',
      caps: ['Schema-less ingestion · 200+ connectors', 'Behavioral baselines per service', 'Sigma + custom rule language', 'Threat-hunt console with replay', 'SOAR-ready webhooks & runbooks', 'MITRE ATT&CK mapped alerting']
    },
    {
      name: 'ANPTOP', cat: 'NETWORK',
      desc: 'Continuous attack surface mapping.',
      caps: ['Live asset discovery', 'Exposure scoring per service', 'Shadow & zombie endpoint detection', 'Topology visualization', 'API inventory from traffic']
    },
    {
      name: 'WafLynk', cat: 'PROTECTION',
      desc: 'AI-powered WAF.',
      caps: ['L3–L7 packet inspection', 'Auto-tunes blocking rules per endpoint', 'Rate limiting & bot mitigation', 'Geo-blocking & IP reputation', 'Real-time block feeds to LogVeda']
    },
    {
      name: 'Narada Connect', cat: 'COLLABORATION',
      desc: 'Secure collaboration for security teams.',
      caps: ['E2E encrypted chat, voice & video', 'Air-gapped deployment option', 'Audit log of all communications', 'Off the record mode']
    },
    {
      name: 'HAWK-EYE', cat: 'PCI & PII DISCOVERY',
      desc: 'PCI and PII discovery for banks & fintechs.',
      caps: ['Sweeps servers, databases & endpoints', 'In-place masking & cryptographic proof', 'CycloneDX / SPDX SBOM output', 'Regulatory evidence pack']
    },
  ];

  defenseSteps = [
    { num: '01', text: 'AI-powered packet inspection at L3–L7' },
    { num: '02', text: 'WafLynk auto-tunes per-endpoint blocking rules in real time' },
    { num: '03', text: 'ANPTOP continuously maps attack surface for new exposures' },
    { num: '04', text: 'LogVeda SIEM correlates events and triggers SOAR playbooks instantly' },
    { num: '05', text: '4-hour guaranteed breach response SLA for critical incidents' },
  ];

  defenseStats = [
    { value: '3.2min', label: 'Avg. MTTD' },
    { value: '<4h', label: 'Breach SLA' },
    { value: '99.97%', label: 'SOC Uptime' },
  ];

  industries = [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, title: 'Banking & Finance', desc: 'Core banking, SWIFT, RBI framework compliance' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`, title: 'Fintech & Payments', desc: 'PCI-DSS, payment APIs, fraud prevention' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`, title: 'Healthcare & Pharma', desc: 'Medical devices, HIPAA-aligned controls' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, title: 'Government & PSU', desc: 'CERT-In guidelines, national infrastructure' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`, title: 'E-commerce & Retail', desc: 'Consumer data, payment flows, supply chain' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, title: 'SaaS & Technology', desc: 'Multi-tenant architecture, CI/CD pipelines' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`, title: 'Manufacturing & ICS', desc: 'ICS/SCADA, OT/IT convergence, Purdue model' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`, title: 'Telecom & ISP', desc: 'Network infrastructure, SS7 risks, carrier-grade' },
  ];

  frameworks = ['OWASP WSTG', 'OWASP MASVS', 'PTES', 'NIST SP 800-115', 'MITRE ATT&CK', 'CIS Benchmarks'];
}
