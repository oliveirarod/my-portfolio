import { ElementRef, EventEmitter, Injectable } from '@angular/core';

/**
 * `ScrollToService` is an Angular service used to handle scrolling to specific sections on a web page.
 * To use this service, follow these steps:
 *
 * 1. Inject `ScrollToService` into your component or service.
 * 2. Call the `handleScrollToSection` method passing the section name and the element to scroll to.
 *
 * Example usage:
 *
 * In your component:
 * 
 * import { Component, ElementRef } from '@angular/core';
 * import { ScrollToService } from 'path-to-scroll-to-service';
 * 
 * @Component({
 *   selector: 'app-your-component',
 *   templateUrl: '<div #sectionRef> ... </div>',
 * })
 * export class YourComponent implements AfterViewInit {
 *   @ViewChild('sectionRef') sectionRef!: ElementRef;
 * 
 *   constructor(private scrollToService: ScrollToService) {}
 * 
 *   // Call the handleScrollToSection method in the ngAfterViewInit lifecycle hook
 *   ngAfterViewInit(): void {
 *     this.scrollToService.handleScrollToSection(
 *       'about-section',
 *       this.aboutSectionElement
 *     );
 *   }
 * 
 *   // ...
 * }
 * 
 * And in your component that trigger the scroll use this method:
 * 
 * this.scrollToService.scrollToSection(section);
 */

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
  private scrollToEvent = new EventEmitter<string>();

  constructor() {}

  /**
   * Emits the sectionId event for scrolling.
   * @param sectionId - The ID of the section to scroll to.
   */
  scrollToSection(sectionId: string) {
    this.scrollToEvent.emit(sectionId);
  }

  /**
   * Subscribes to the scrollToEvent and scrolls to the specified elementToScroll when the sectionName event is emitted.
   * @param sectionName - The name of the section to scroll to.
   * @param elementToScroll - The element to scroll to.
   */
  // TODO: Criar tratamento de erro
  // TODO: Scroll está estranho quando clico em 'contact' por exemplo, pois está no fim da página e as animações tem delay
  handleScrollToSection(sectionName: string, elementToScroll: ElementRef) {
    this.scrollToEvent.subscribe((section) => {
      if (section !== sectionName) return;

      scrollTo({
        top: elementToScroll.nativeElement.offsetTop - 300,
        behavior: 'smooth',
      });
    });
  }
}
