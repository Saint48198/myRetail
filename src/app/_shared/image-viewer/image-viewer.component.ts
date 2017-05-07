import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'image-viewer',
    styleUrls: ['./_image-viewer.component.scss'],
    templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {
    public currentImage: Object = {};
    public imageCollection: Object[] = [];

    @Input() set images (images: Object[]) {

        this.imageCollection = images || [];

        this.imageCollection.forEach((image, index) => {
            if (index === 0) {
                image['active'] = true;
            } else {
                image['active'] = false;
            }
        });

        console.log(this.imageCollection);

        this.currentImage = this.imageCollection.length ? this.imageCollection[0] : {};
    };

    public selectImage (e) {

    }

}
