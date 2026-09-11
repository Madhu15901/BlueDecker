import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  // Accepts both plain attribute usage and [scrollReveal]="true" binding
  @Input() scrollReveal: boolean | '' = true;
  @Input() scrollRevealDelay = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('reveal');
    if (this.scrollRevealDelay) {
      element.classList.add(`reveal-delay-${this.scrollRevealDelay}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
