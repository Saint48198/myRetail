import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'image-viewer',
    styleUrls: ['./_image-viewer.component.scss'],
    templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {
    private _currentImage: Object = {};
    private _images: Object[] = [];

    @Input() set images (images: Object[]) {

        this._images = images || [];
        this._currentImage = images.length ? images[0] : {};
    };

}
