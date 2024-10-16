import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nws-image-slider',
  templateUrl: './nws-image-slider.component.html',
  styleUrls: ['./nws-image-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NwsImageSliderComponent implements OnInit {
  @Input() images: string[];

  public aspectRatio: string;
  public currentIndex: number;
  public isPreviousBtnDisabled: boolean;
  public isNextBtnDisabled: boolean;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.images = [];
    this.currentIndex = 0;
    this.aspectRatio = '1/1';
    this.isPreviousBtnDisabled = true;
    this.isNextBtnDisabled = true;
  }

  ngOnInit(): void {
    this._initialize();
  }

  public nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
    this._updateButtonsState();
  }

  public prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this._updateButtonsState();
  }

  private _initialize(): void {
    if (this.images.length > 0) {
      this._setContainerHeight();
      this._updateButtonsState();
    }
  }

  private _setContainerHeight(): void {
    const img = new Image();
    img.src = this.images[0];
    img.onload = () => {
      const ratio = img.width / img.height;
      this.aspectRatio = `${img.width} / ${img.height}`;
      this._changeDetectorRef.detectChanges();
    };
  }

  private _updateButtonsState(): void {
    this.isPreviousBtnDisabled = this.currentIndex === 0;
    this.isNextBtnDisabled = this.currentIndex === this.images.length - 1;
  }}
