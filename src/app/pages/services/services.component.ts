import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Service {
  num: string;
  title: string;
  desc: string;
  details: string[];
  tag: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule, ScrollRevealDirective],
  template: `
  <div class="services-page">
    <section class="page-hero">
      <div class="cyber-grid-bg"></div>
      <div class="page-hero-orb"></div>
      <div class="container">
        <div class="page-hero-content" scrollReveal>
          <span class="section-label">What We Offer</span>
          <h1 class="page-title">16 services. <span class="gradient-text">One partner.</span></h1>
          <p class="page-subtitle">
            Every service is led by a senior operator, mapped to an auditable methodology, and delivered with a reproducible proof of concept per finding.
          </p>
          <div class="hero-pills">
            <span class="badge badge-primary" *ngFor="let tag of tags">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-full-grid">
          <div class="service-full-card glass-card" *ngFor="let svc of services; let i = index"
               scrollReveal [scrollRevealDelay]="(i % 3) + 1">
            <div class="svc-header">
              <span class="svc-num">{{ svc.num }}</span>
              <span class="badge badge-accent">{{ svc.tag }}</span>
            </div>
            <h2 class="svc-title">{{ svc.title }}</h2>
            <p class="svc-desc">{{ svc.desc }}</p>
            <ul class="svc-details">
              <li *ngFor="let d of svc.details">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ d }}
              </li>
            </ul>
            <a routerLink="/contact" class="svc-cta btn btn-outline btn-sm">
              Request this service
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="bottom-cta glass-card" scrollReveal>
          <h2>Not sure which service you need?</h2>
          <p>A thirty-minute scoping call is free. We'll map your attack surface and tell you what to test first.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;margin-top:1.5rem;">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Request Assessment</a>
            <a routerLink="/pricing" class="btn btn-outline btn-lg">View Pricing</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  `,
  styles: [`
    .services-page { padding-top: 80px; }

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
    .page-subtitle { font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1.5rem; }
    .hero-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }

    .services-full-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .service-full-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }

    .svc-header { display: flex; align-items: center; justify-content: space-between; }

    .svc-num {
      font-size: 1.4rem;
      font-weight: 900;
      font-family: var(--font-mono);
      color: var(--color-primary);
      opacity: 0.5;
    }

    .svc-title { font-size: 1.05rem; font-weight: 700; line-height: 1.3; }
    .svc-desc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.65; }

    .svc-details {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      flex: 1;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: 0.82rem;
        color: var(--color-text-muted);
        svg { color: var(--color-primary); flex-shrink: 0; margin-top: 2px; }
      }
    }

    .svc-cta { align-self: flex-start; margin-top: auto; }

    .bottom-cta {
      text-align: center;
      padding: 3.5rem 2rem;
      h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 0.75rem; }
      p { color: var(--color-text-muted); max-width: 500px; margin: 0 auto; line-height: 1.7; }
    }
  `]
})
export class ServicesComponent {
  tags = ['VAPT', 'Red Teaming', 'Managed SOC', 'Cloud', 'IoT/OT', 'AppSec', 'GRC', 'vCISO'];

  services: Service[] = [
    { num: '01', title: 'Web Application VAPT', tag: 'OWASP Top 10', desc: 'Manual and automated testing of web applications covering authentication, business logic, injection, and client-side attack vectors.', details: ['OWASP WSTG methodology', 'Business logic & abuse-case testing', 'Authenticated testing (multiple roles)', 'CVSS-rated findings with PoC', 'Retest of all critical findings'] },
    { num: '02', title: 'Mobile Application VAPT', tag: 'iOS · Android', desc: 'Deep security assessment of iOS and Android apps using Frida-based dynamic instrumentation and static binary analysis.', details: ['OWASP MASVS alignment', 'Static + dynamic analysis', 'Frida-based runtime instrumentation', 'Deep-link & intent testing', 'Backend API assessment included'] },
    { num: '03', title: 'API Security Testing', tag: 'REST · GraphQL · gRPC', desc: 'Comprehensive security testing of REST, GraphQL and gRPC APIs for authentication, authorisation, and business logic vulnerabilities.', details: ['OWASP API Security Top 10', 'Auth & authorisation testing', 'Rate limiting & injection vectors', 'Schema & input validation', 'Shadow endpoint discovery'] },
    { num: '04', title: 'Network Penetration Test', tag: 'Internal & External', desc: 'Internal and external network assessment targeting exposed services, firewall rules, and lateral movement paths.', details: ['Internal & external scope', 'Active Directory attack paths', 'Firewall & ACL review', 'Network segmentation audit', 'Wireless security testing'] },
    { num: '05', title: 'Cloud Pen-testing', tag: 'AWS · Azure · GCP', desc: 'Targeted assessment of cloud environments covering IAM misconfigurations, storage exposure, and serverless attack surfaces.', details: ['AWS · Azure · GCP coverage', 'IAM privilege escalation paths', 'S3 / Blob / bucket misconfigurations', 'Container & Kubernetes security', 'CIS benchmark gap analysis'] },
    { num: '06', title: 'Secure Code Review', tag: 'Manual + SAST', desc: 'Manual and tool-assisted analysis of source code to surface logic flaws, injection points, and dependency vulnerabilities.', details: ['Manual expert review + SAST baseline', 'OWASP Top 10 coverage', 'Dependency & SCA scanning', 'CI/CD integration guidance', 'Developer remediation playbooks'] },
    { num: '07', title: 'IoT Security Testing', tag: 'Firmware · Radio · Hardware', desc: 'End-to-end assessment of IoT devices covering firmware, radio protocols, hardware interfaces, and backend cloud APIs.', details: ['Firmware extraction & analysis', 'Radio protocol testing (Zigbee, BLE, Z-Wave)', 'Hardware debug interface probing', 'Cloud API & mobile companion app', 'Supply-chain component review'] },
    { num: '08', title: 'Medical Device Security', tag: 'Clinical · SBOM', desc: 'Specialised security testing for medical devices covering firmware, clinical network interfaces, and SBOM generation for regulatory submissions.', details: ['Firmware & OS hardening review', 'Clinical network interface testing', 'SBOM generation (CycloneDX / SPDX)', 'FDA / MDR alignment guidance', 'Post-market surveillance support'] },
    { num: '09', title: 'Threat Modeling', tag: 'STRIDE · PASTA', desc: 'Facilitated threat modeling workshops that identify design-level risks before code is written or systems are deployed.', details: ['STRIDE & PASTA methodology', 'Architecture review & data-flow diagrams', 'Attack tree construction', 'Risk-ranked threat register', 'Mitigation roadmap per threat'] },
    { num: '10', title: 'Root Cause Analysis', tag: 'Post-Incident Forensics', desc: 'Post-incident forensic investigation to establish the full attack timeline, root cause, and remediation path.', details: ['Full attack timeline reconstruction', 'Artifact & log forensics', 'Malware triage & IOC extraction', 'MITRE ATT&CK technique mapping', 'Board-ready incident report'] },
    { num: '11', title: 'Red Teaming', tag: 'Adversary Emulation', desc: 'Goal-based, multi-phase adversary simulation that tests your detection and response against a realistic attack campaign.', details: ['Goal-based objectives defined upfront', 'Multi-stage: recon → exploit → persist → exfil', 'Physical & social engineering options', 'Purple team debrief included', 'MITRE ATT&CK coverage report'] },
    { num: '12', title: 'Software Composition Analysis', tag: 'SCA · License · Reachability', desc: 'Deep analysis of open-source dependencies for known CVEs, licence risk, and reachable vulnerability paths.', details: ['CVE detection with reachability scoring', 'Licence compliance audit', 'Transitive dependency mapping', 'SBOM output (CycloneDX / SPDX)', 'CI/CD pipeline integration'] },
    { num: '13', title: 'OT Security Testing', tag: 'ICS · SCADA · Purdue', desc: 'Non-disruptive security assessment of operational technology environments based on the Purdue reference model.', details: ['ICS / SCADA protocol analysis', 'Purdue model zone segmentation review', 'Asset inventory & exposure scoring', 'Engineer workstation & HMI review', 'IEC 62443 alignment guidance'] },
    { num: '14', title: 'Vulnerability Disclosure Programme', tag: 'VDP · Bug Bounty', desc: 'Design and operation of a structured VDP or bug-bounty programme that channels researcher reports into your remediation workflow.', details: ['Policy drafting & legal safe harbour', 'Researcher triage & response workflow', 'Scope definition & reward structure', 'Integration with your ticketing system', 'Quarterly programme review'] },
    { num: '15', title: 'Virtual CISO', tag: 'Fractional Leadership', desc: 'Experienced security leadership on a fractional basis — strategy, governance, board reporting, and vendor oversight without a full-time hire.', details: ['Monthly strategy & roadmap sessions', 'Board & audit committee reporting', 'Vendor security review', 'Policy & standards ownership', 'Incident response oversight'] },
    { num: '16', title: 'Startup Security Program', tag: 'Pre-seed → Series A', desc: 'A 90-day structured security programme designed for early-stage startups — from baseline assessment to investor-ready posture.', details: ['Baseline risk assessment', 'Security policy starter pack', 'Developer secure coding training', 'Pre-Series A VAPT', 'Investor security due diligence pack'] },
  ];
}
