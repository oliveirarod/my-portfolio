import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";
import anime from 'animejs/lib/anime.es.js';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationProperties: any = {};
  private animationExecuted = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const element = this.elementRef.nativeElement;
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    console.log("screenPosition: ", screenPosition);
    console.log("elementPosition: ", elementPosition);
    if (!this.animationExecuted && elementPosition < screenPosition) {
      this.animationExecuted = true;
      // Executar animação apenas se não foi executada e o elemento está visível na tela
      anime({
        targets: element,
        ...this.animationProperties
      });
    } else if (this.animationExecuted && elementPosition >= screenPosition) {
      // Reiniciar a animação se o elemento estiver fora da tela
      this.animationExecuted = false;
    }
  }
}
