import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Student} from "./type";

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView: boolean = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input() set appUnless(condition: boolean){
  }
}
