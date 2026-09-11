import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-glow"></div>
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <img src="logo.png" alt="BlueDecker" class="footer-logo-img">
              <span class="footer-logo-text">Blue<span>Decker</span></span>
            </a>
            <p class="footer-tagline">
              Offensive security, built different. We build our own tools and deliver transparent, bounded assessments for modern enterprises.
            </p>
            <div class="footer-socials">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li><a routerLink="/services">VAPT</a></li>
              <li><a routerLink="/services">Red Teaming</a></li>
              <li><a routerLink="/services">Managed SOC</a></li>
              <li><a routerLink="/services">Cloud Security</a></li>
              <li><a routerLink="/services">Web App Security</a></li>
              <li><a routerLink="/services">API Security</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/careers">Careers</a></li>
              <li><a routerLink="/pricing">Pricing</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4 class="footer-col-title">Get In Touch</h4>
            <div class="footer-contact">
              <a href="mailto:hello@bluedecker.io" class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                hello&#64;bluedecker.io
              </a>
              <a href="tel:+918000000000" class="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 80000 00000
              </a>
            </div>
            <a routerLink="/contact" class="btn btn-outline btn-sm" style="margin-top:1.25rem;">
              Request Assessment
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">
            &copy; {{ currentYear }} BlueDecker Security Pvt. Ltd. All rights reserved.
          </p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      background: var(--color-surface);
      border-top: 1px solid var(--color-border);
      padding: 4rem 0 1.5rem;
      overflow: hidden;
    }

    .footer-glow {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 200px;
      background: radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 3rem;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      text-decoration: none;
    }

    .footer-logo-img {
      width: 36px;
      height: 36px;
      object-fit: contain;
      filter: drop-shadow(0 0 6px rgba(0, 180, 255, 0.45));
    }

    .footer-logo-text {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-text);
      letter-spacing: -0.03em;

      span { color: var(--color-accent); }
    }

    .footer-tagline {
      color: var(--color-text-muted);
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .footer-socials {
      display: flex;
      gap: 0.75rem;
    }

    .social-link {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-muted);
      transition: var(--transition-base);

      &:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
        background: rgba(108, 99, 255, 0.1);
      }
    }

    .footer-col-title {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-text);
      margin-bottom: 1.25rem;
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      a {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        transition: var(--transition-fast);

        &:hover {
          color: var(--color-primary);
          padding-left: 0.25rem;
        }
      }
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer-contact-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--color-text-muted);
      font-size: 0.9rem;
      transition: var(--transition-fast);

      &:hover { color: var(--color-accent); }
    }

    .footer-bottom {
      border-top: 1px solid var(--color-border);
      padding-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-copy {
      color: var(--color-text-dim);
      font-size: 0.85rem;
    }

    .footer-legal {
      display: flex;
      gap: 1.5rem;

      a {
        color: var(--color-text-dim);
        font-size: 0.85rem;
        transition: var(--transition-fast);

        &:hover { color: var(--color-text-muted); }
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
