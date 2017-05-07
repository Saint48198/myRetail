import { Component, ElementRef, Input, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

declare var Velocity: any;

@Component({
    selector: 'image-viewer',
    styleUrls: ['./_image-viewer.component.scss'],
    templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent implements AfterContentChecked {
    public currentImage: Object = {};
    public imageCollection: Object[] = [];
    public currentSlide: number = 1;
    public numOfSlides: number = 0;
    public nextIsDisabled: boolean = true;
    public prevIsDisabled: boolean = true;

    private _numImgPerSlide: number = 3;
    private _slideWidth: number = 220; // could get width from the dom by getting viewport element width
    private _ele: Element;

    constructor (private _eleRef: ElementRef) {}

    @Input() set images (images: Object[]) {

        this.imageCollection = images || [];

        this.imageCollection.forEach((image, index) => {
            if (index === 0) {
                image['active'] = true;
            } else {
                image['active'] = false;
            }
        });

        this.numOfSlides = Math.ceil(this.imageCollection.length / this._numImgPerSlide);
        this.currentImage = this.imageCollection.length ? this.imageCollection[0] : {};

        this.nextIsDisabled = false;
    };

    public ngAfterContentChecked () {
        this._ele = this._eleRef.nativeElement.querySelector('#imageList');
    }

    public selectImage (e) {
        alert('image selected');
    }

    public goToPreviousSlide (e) {
        let pos = (this._slideWidth * (this.currentSlide - 2) * -1) + 'px';

        this.prevIsDisabled = true;
        this.nextIsDisabled = false;

        if (this.currentSlide >= 1) {
            Velocity(this._ele, { left: pos }, () => {
                this.currentSlide--;
                if (this.currentSlide > 1) {
                    this.prevIsDisabled = false;
                }
            });
        }
    }

    public goToNextSlide (e) {

        this.prevIsDisabled = false;
        this.nextIsDisabled = true;

        let pos = (this._slideWidth * this.currentSlide * -1) + 'px';
        if (this.currentSlide <= this.numOfSlides) {
            Velocity(this._ele, { left: pos }, () => {
                this.currentSlide++;
                if (this.currentSlide < this.numOfSlides) {
                    this.nextIsDisabled = false;
                }
            });
        }
    }
}
