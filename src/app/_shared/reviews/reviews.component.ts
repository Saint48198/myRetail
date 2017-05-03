import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'reviews',
    styleUrls: ['./_reviews.component.scss'],
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent {

    public reviewData: Object = {};
    public totalReviews: number = 0;
    public proReviews: Object[] = [];
    public conReviews: Object[] = [];

    @Input() set data (data: Object[]) {
        this.reviewData = data && data.length ? data[0] : {};
        this.totalReviews = parseInt(this.reviewData['totalReviews'], 0);
        this.conReviews = this.reviewData['Con'] || [];
        this.proReviews =  this.reviewData['Pro'] || [];
    };
}
