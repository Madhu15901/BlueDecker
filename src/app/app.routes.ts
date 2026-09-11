import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'BlueDecker · Premier Cybersecurity Partner'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services · BlueDecker'
  },
  {
    path: 'platform',
    loadComponent: () => import('./pages/platform/platform.component').then(m => m.PlatformComponent),
    title: 'Platform · BlueDecker'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us · BlueDecker'
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    title: 'Pricing · BlueDecker'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact · BlueDecker'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers · BlueDecker'
  },
  { path: '**', redirectTo: '' }
];
