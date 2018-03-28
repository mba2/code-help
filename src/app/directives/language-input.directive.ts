import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: '[languageInput]'
})
export class LanguageInputDirective {
  @Input("languageInput") data: any[];

  constructor(public elem : ElementRef) { }
}
