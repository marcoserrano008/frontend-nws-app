import {CommonModule} from "@angular/common";
import {NwsAutoResizeTextareaDirective} from "./nws-auto-resize-textarea.directive";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    NwsAutoResizeTextareaDirective
  ],
  exports: [
    NwsAutoResizeTextareaDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
