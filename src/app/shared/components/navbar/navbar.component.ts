import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavLink { label: string; path: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.menu-open]="menuOpen">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">
          <img src="logo.png" alt="BlueDecker" class="logo-img">
          <span class="logo-text">Blue<span class="logo-accent">Decker</span></span>
        </a>

        <div class="nav-links">
          <a *ngFor="let link of navLinks"
             [routerLink]="link.path"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{exact: link.path === '/'}"
             class="nav-link">
            {{ link.label }}
          </a>
        </div>

        <div class="nav-cta">
          <a routerLink="/contact" class="nav-incident-link" (click)="closeMenu()">Report Incident</a>
          <a routerLink="/contact" class="btn btn-primary btn-sm" (click)="closeMenu()">
            Get Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <button class="hamburger" (click)="toggleMenu()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="mobile-menu" [class.open]="menuOpen">
        <a *ngFor="let link of navLinks"
           [routerLink]="link.path"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{exact: link.path === '/'}"
           class="mobile-link"
           (click)="closeMenu()">
          {{ link.label }}
        </a>
        <a routerLink="/contact" class="mobile-incident-link" (click)="closeMenu()">Report Incident</a>
        <a routerLink="/contact" class="btn btn-primary" (click)="closeMenu()" style="margin-top: 0.5rem; align-self: flex-start;">Get Assessment</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.3s ease;
    }

    .navbar.scrolled {
      background: rgba(5, 10, 20, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--color-border);
      padding: 0.85rem 0;
      box-shadow: 0 4px 30px rgba(0,0,0,0.4);
    }

    .nav-container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      flex-shrink: 0;
    }

    .logo-img {
      width: 36px;
      height: 36px;
      object-fit: contain;
      filter: drop-shadow(0 0 8px rgba(0, 180, 255, 0.5));
    }

    .logo-text { font-size: 1.35rem; font-weight: 800; color: var(--color-text); letter-spacing: -0.03em; }
    .logo-accent { color: var(--color-accent); }

    .nav-links { display: flex; align-items: center; gap: 0.25rem; flex: 1; justify-content: center; }

    .nav-link {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-muted);
      border-radius: var(--radius-sm);
      transition: var(--transition-base);
      cursor: pointer;

      &:hover { color: var(--color-text); background: rgba(255,255,255,0.06); }
      &.active { color: var(--color-primary); background: rgba(108, 99, 255, 0.1); }
    }

    .nav-cta { flex-shrink: 0; display: flex; align-items: center; gap: 1rem; }

    .nav-incident-link {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-danger);
      cursor: pointer;
      transition: var(--transition-fast);
      white-space: nowrap;
      &:hover { opacity: 0.8; }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      margin-left: auto;

      span { display: block; width: 24px; height: 2px; background: var(--color-text); border-radius: var(--radius-full); transition: var(--transition-base); }
    }

    .menu-open .hamburger {
      span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      span:nth-child(2) { opacity: 0; }
      span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      padding: 1rem 1.5rem 1.5rem;
      border-top: 1px solid var(--color-border);
      background: rgba(5, 10, 20, 0.95);
      backdrop-filter: blur(20px);
      gap: 0.25rem;

      &.open { display: flex; }
    }

    .mobile-link {
      padding: 0.75rem 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-muted);
      border-radius: var(--radius-sm);
      transition: var(--transition-base);
      &:hover, &.active { color: var(--color-primary); }
    }

    .mobile-incident-link {
      padding: 0.75rem 0.5rem;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-danger);
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .nav-links, .nav-cta { display: none; }
      .hamburger { display: flex; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Services', path: '/services' },
    { label: 'Platform', path: '/platform' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 40; }

  ngOnInit() { this.isScrolled = window.scrollY > 40; }
  ngOnDestroy() {}
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
