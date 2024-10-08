import {AfterViewInit, Directive, ElementRef, HostListener, Input,} from '@angular/core';

@Directive({
  selector: '[nwsAutoResizeTextarea]'
})
export class NwsAutoResizeTextareaDirective implements AfterViewInit {
  private readonly DEFAULT_MAX_HEIGHT: number = 300;
  private _textAreaElement!: HTMLTextAreaElement;
  @Input('maxHeight') maxHeight?: number;

  constructor(private _elementRef: ElementRef) {
    this._textAreaElement = this._elementRef.nativeElement as HTMLTextAreaElement;
  }

  ngAfterViewInit(): void {
    this._adjustHeight();
  }

  @HostListener('input')
  onInput(): void {
    this._adjustHeight();
  }

  @HostListener('focus')
  onFocus(): void {
    this._adjustHeight();
  }

  private _adjustHeight(): void {
    const max: number = this.maxHeight ?? this.DEFAULT_MAX_HEIGHT;
    if (this._textAreaElement.scrollHeight < max) {
      this._textAreaElement.style.height = 'auto';
      const newHeight: number = this._textAreaElement.scrollHeight + 2;
      this._textAreaElement.style.height = newHeight + 'px';
    } else {
      this._textAreaElement.style.overflowY = 'auto';
    }
  }
}
