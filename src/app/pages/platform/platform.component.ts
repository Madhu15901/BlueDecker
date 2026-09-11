import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="platform-page">

    <section class="hero">
      <div class="hero-bg">
        <div class="cyber-grid-bg"></div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
      </div>
      <div class="container hero-container">
        <div class="hero-badge badge badge-primary">
          <span class="badge-dot"></span>
          Built In-House · Running in Production
        </div>
        <h1 class="hero-title">Five products.<br><span class="gradient-text">Built by us, running in production.</span></h1>
        <div class="hero-stats">
          <div class="hero-stat" *ngFor="let s of heroStats">
            <span class="stat-val gradient-text">{{ s.value }}</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>
        </div>
        <div class="hero-actions">
          <a routerLink="/pricing" class="btn btn-primary btn-lg">
            See platform plans
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a routerLink="/contact" class="btn btn-outline btn-lg">Book a walkthrough</a>
        </div>
      </div>
    </section>

    <section class="section tools-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">The Platform</span>
          <h2 class="section-title">Five products. <span class="gradient-text">One stack.</span></h2>
          <p class="section-subtitle">Each tool was built because nothing off the shelf did what our clients needed. They run in our own SOC and in client environments.</p>
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
          <div class="tool-detail-top">
            <div class="tool-detail-meta">
              <span class="badge badge-accent">{{ tools[activeTool].cat }}</span>
              <h3 class="tool-detail-name">{{ tools[activeTool].name }}</h3>
              <p class="tool-detail-desc">{{ tools[activeTool].desc }}</p>
            </div>
            <a routerLink="/contact" class="btn btn-primary">
              Request a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div class="tool-divider"></div>
          <div class="tool-caps-grid">
            <div class="tool-cap-item" *ngFor="let cap of tools[activeTool].caps">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ cap }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section defense-section">
      <div class="cyber-grid-bg"></div>
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">How It Works</span>
          <h2 class="section-title">Layered defense in <span class="gradient-text">five steps.</span></h2>
        </div>
        <div class="defense-steps" scrollReveal>
          <div class="defense-step" *ngFor="let s of defenseSteps">
            <div class="step-num">{{ s.num }}</div>
            <p class="step-text">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section deploy-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Deployment</span>
          <h2 class="section-title">Deploy where you <span class="gradient-text">need it.</span></h2>
        </div>
        <div class="deploy-grid">
          <div class="deploy-card glass-card" *ngFor="let d of deployOptions; let i = index" scrollReveal [scrollRevealDelay]="i + 1">
            <div class="deploy-icon" [innerHTML]="d.icon"></div>
            <h3 class="deploy-name">{{ d.name }}</h3>
            <p class="deploy-time">{{ d.time }}</p>
            <p class="deploy-desc">{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="marquee-section">
      <p class="marquee-label">Trusted by</p>
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <span class="marquee-item" *ngFor="let c of marqueeClients">{{ c }}</span>
          <span class="marquee-item" *ngFor="let c of marqueeClients">{{ c }}</span>
        </div>
      </div>
    </section>

    <section class="section methodology-section">
      <div class="container">
        <div class="section-header" scrollReveal>
          <span class="section-label">Standards</span>
          <h2 class="section-title">Testing you can <span class="gradient-text">audit.</span></h2>
        </div>
        <div class="framework-badges" scrollReveal>
          <span class="framework-badge" *ngFor="let f of frameworks">{{ f }}</span>
        </div>
      </div>
    </section>

    <section class="section cta-section" scrollReveal>
      <div class="container">
        <div class="cta-card glass-card">
          <div class="cta-bg">
            <div class="cyber-grid-bg"></div>
            <div class="cta-orb cta-orb-1"></div>
            <div class="cta-orb cta-orb-2"></div>
          </div>
          <div class="cta-content">
            <h2 class="cta-title">A walkthrough beats a datasheet.<br><span class="gradient-text">Thirty minutes with the engineers who built it.</span></h2>
            <div class="cta-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">
                Book a walkthrough
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a routerLink="/pricing" class="btn btn-outline btn-lg">See platform plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  `,
  styles: [`
    .platform-page { padding-top: 0; }

    .hero { position: relative; min-height: 80vh; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; z-index: 0; }
    .hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
    .hero-orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%); top: -200px; left: -100px; }
    .hero-orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%); bottom: -100px; right: -150px; }

    .hero-container { position: relative; z-index: 1; padding-top: 9rem; padding-bottom: 5rem; display: flex; flex-direction: column; gap: 2rem; }

    .hero-badge { align-self: flex-start; }
    .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-accent); animation: pulse 2s infinite; flex-shrink: 0; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    .hero-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1.1; max-width: 800px; }
    .hero-stats { display: flex; gap: 3rem; flex-wrap: wrap; }
    .hero-stat { display: flex; flex-direction: column; gap: 0.15rem; }
    .stat-val { font-size: 2rem; font-weight: 800; font-family: var(--font-mono); letter-spacing: -0.03em; }
    .stat-lbl { font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

    .tools-section { background: var(--color-bg); }

    .section-header { text-align: center; margin-bottom: 3rem; .section-label { justify-content: center; } .section-subtitle { margin: 0 auto; } }

    .tools-tabs { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem; }

    .tool-pill {
      padding: 0.5rem 1.25rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600;
      background: rgba(255,255,255,0.04); border: 1px solid var(--color-border); color: var(--color-text-muted);
      cursor: pointer; transition: var(--transition-base); display: flex; flex-direction: column; align-items: center; gap: 0.1rem;
      &:hover { border-color: var(--color-primary); color: var(--color-text); }
      &.active { background: rgba(108,99,255,0.12); border-color: var(--color-primary); color: var(--color-primary); }
    }

    .tool-pill-cat { font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-dim); }
    .tool-pill.active .tool-pill-cat { color: var(--color-primary); }

    .tool-detail { padding: 2.5rem; @media (max-width: 640px) { padding: 1.5rem; } }

    .tool-detail-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }

    .tool-detail-name { font-size: 1.75rem; font-weight: 800; margin: 0.5rem 0 0.4rem; }
    .tool-detail-desc { font-size: 1rem; color: var(--color-text-muted); line-height: 1.65; max-width: 560px; }

    .tool-divider { height: 1px; background: var(--color-border); margin: 2rem 0; }

    .tool-caps-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;
      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .tool-cap-item {
      display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.875rem; color: var(--color-text-muted);
      svg { color: var(--color-accent); flex-shrink: 0; margin-top: 2px; }
    }

    .defense-section { background: var(--color-surface); position: relative; overflow: hidden; }

    .defense-steps { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 0 auto; position: relative;
      &::before { content: ''; position: absolute; left: 20px; top: 40px; bottom: 40px; width: 1px; background: linear-gradient(to bottom, var(--color-primary), var(--color-accent)); opacity: 0.25; }
    }

    .defense-step { display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.25rem 0; }

    .step-num { width: 40px; height: 40px; min-width: 40px; border-radius: 50%; background: var(--color-surface); border: 1px solid rgba(108,99,255,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; font-family: var(--font-mono); color: var(--color-primary); position: relative; z-index: 1; }

    .step-text { font-size: 1rem; color: var(--color-text-muted); line-height: 1.65; padding-top: 0.6rem; }

    .deploy-section { background: var(--color-bg); }
    .deploy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 640px) { grid-template-columns: 1fr; } }
    .deploy-card { padding: 2rem; display: flex; flex-direction: column; gap: 0.75rem; ::ng-deep svg { width: 26px; height: 26px; } }
    .deploy-icon { width: 52px; height: 52px; border-radius: var(--radius-md); background: rgba(108,99,255,0.1); border: 1px solid rgba(108,99,255,0.2); display: flex; align-items: center; justify-content: center; color: var(--color-primary); }
    .deploy-name { font-size: 1rem; font-weight: 700; }
    .deploy-time { font-size: 0.78rem; font-family: var(--font-mono); color: var(--color-accent); }
    .deploy-desc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; }

    .marquee-section { padding: 1.75rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); background: var(--color-surface); overflow: hidden; }
    .marquee-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-dim); text-align: center; margin-bottom: 1rem; }
    .marquee-wrapper { overflow: hidden; }
    .marquee-track { display: flex; gap: 4rem; width: max-content; animation: marquee 20s linear infinite; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-item { font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-dim); white-space: nowrap; font-family: var(--font-mono); }

    .methodology-section { background: var(--color-bg); }
    .framework-badges { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
    .framework-badge { padding: 0.5rem 1.25rem; border-radius: var(--radius-full); background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); color: var(--color-accent); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.04em; font-family: var(--font-mono); }

    .cta-section { background: var(--color-surface); }
    .cta-card { position: relative; padding: 4.5rem 3rem; text-align: center; overflow: hidden; @media (max-width: 640px) { padding: 2.5rem 1.5rem; } }
    .cta-bg { position: absolute; inset: 0; z-index: 0; }
    .cta-orb { position: absolute; border-radius: 50%; filter: blur(60px); }
    .cta-orb-1 { width: 400px; height: 400px; background: rgba(108,99,255,0.12); top: -100px; left: -100px; }
    .cta-orb-2 { width: 300px; height: 300px; background: rgba(0,212,255,0.08); bottom: -50px; right: -50px; }
    .cta-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
    .cta-title { font-size: clamp(1.5rem, 3.5vw, 2.4rem); font-weight: 800; letter-spacing: -0.03em; max-width: 640px; }
    .cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
  `]
})
export class PlatformComponent {
  heroStats = [
    { value: '5', label: 'Products' },
    { value: '200+', label: 'Connectors' },
    { value: '3.2min', label: 'MTTD' },
    { value: '99.97%', label: 'SOC Uptime' },
  ];

  activeTool = 0;

  tools = [
    { name: 'LogVeda SIEM', cat: 'SIEM/DETECTION', desc: 'A modern SIEM built from scratch for environments that outgrew legacy platforms. Schema-less ingestion means any log source connects in minutes, not weeks.', caps: ['Schema-less ingestion · 200+ connectors', 'Behavioral baselines per service', 'Sigma + custom rule language', 'Threat-hunt console with full replay', 'SOAR-ready webhooks & runbooks', 'MITRE ATT&CK mapped alerting', 'Cross-source correlation engine', 'Long-term cold storage with fast recall'] },
    { name: 'ANPTOP', cat: 'NETWORK', desc: 'Continuous external and internal attack surface mapping. Discovers assets from traffic patterns, not just a target list — including shadow infrastructure.', caps: ['Live asset discovery (agentless)', 'Exposure scoring per service', 'Shadow & zombie endpoint detection', 'Topology visualization with drill-down', 'API inventory derived from traffic', 'Change alerting when new ports open', 'Cloud-aware: AWS / Azure / GCP sync'] },
    { name: 'WafLynk', cat: 'PROTECTION', desc: 'An AI-powered WAF that tunes itself per endpoint rather than applying a single global rule set. Block decisions feed directly into LogVeda for correlation.', caps: ['L3–L7 packet inspection', 'Auto-tunes blocking rules per endpoint', 'Rate limiting & bot mitigation', 'Geo-blocking & IP reputation feeds', 'Real-time block feeds to LogVeda', 'Virtual patching for known CVEs', 'TLS inspection with certificate pinning'] },
    { name: 'Narada Connect', cat: 'COLLABORATION', desc: 'End-to-end encrypted collaboration purpose-built for security teams. Deploy air-gapped for the most sensitive environments.', caps: ['E2E encrypted chat, voice & video', 'Air-gapped deployment option', 'Full audit log of all communications', 'Off the record mode', 'File sharing with chain-of-custody', 'Role-based channel access controls'] },
    { name: 'HAWK-EYE', cat: 'PCI & PII DISCOVERY', desc: 'Automated PCI and PII discovery designed for banks and fintechs. Sweeps infrastructure continuously, masks in place, and generates regulatory evidence packs.', caps: ['Sweeps servers, databases & endpoints', 'In-place masking with cryptographic proof', 'CycloneDX / SPDX SBOM output', 'Regulatory evidence pack generation', 'PCI-DSS scope reduction reporting', 'Scheduled and on-demand sweep modes', 'Integration with SIEM & ticketing'] },
  ];

  defenseSteps = [
    { num: '01', text: 'AI-powered packet inspection at L3–L7 catches threats at the perimeter before they reach application logic.' },
    { num: '02', text: 'WafLynk auto-tunes per-endpoint blocking rules in real time, adapting to novel attack patterns without manual rule changes.' },
    { num: '03', text: 'ANPTOP continuously maps the attack surface for new exposures — shadow APIs, misconfigured ports, newly deployed services.' },
    { num: '04', text: 'LogVeda SIEM correlates events across all sources and triggers SOAR playbooks instantly for automated containment.' },
    { num: '05', text: '4-hour guaranteed breach response SLA for critical incidents, backed by a named senior incident responder.' },
  ];

  deployOptions = [
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`, name: 'Managed Cloud', time: 'Live in days', desc: 'BlueDecker operates the full stack in our cloud tenancy. Zero infrastructure overhead. Most clients are ingesting logs within 48 hours.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, name: 'Sovereign Region', time: 'Live in weeks', desc: 'Deployed in your cloud account or a dedicated region. Your data stays in your jurisdiction. We manage the platform layer.' },
    { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, name: 'On-Prem / Air-Gapped', time: 'Scoped per site', desc: 'Full on-premises or air-gapped deployment for critical infrastructure, government, and defence environments.' },
  ];

  marqueeClients = ['Digital Asset Management Token', 'Green Land Hostels', 'Madras Sarees', 'Vexorion Quantum AI'];
  frameworks = ['OWASP WSTG', 'OWASP MASVS', 'PTES', 'NIST SP 800-115', 'MITRE ATT&CK', 'CIS Benchmarks'];
}
