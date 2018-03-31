import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: '[languageInput]'
})
export class LanguageInputDirective {
  @Input("languageInput") metadata: any;

  constructor(public elem : ElementRef) { }
}
