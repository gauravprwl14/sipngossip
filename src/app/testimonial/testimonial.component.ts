import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }
   @Input() userImgPath: string;
   @Input() userRating: number;
   @Input() userName: string;
   @Input() userReview: string;
   userRatingArr: Array<number>;
  ngOnInit() {
    this.userRatingArr = new Array(5);
    this.userRatingArr.fill(0);
    let tempUserRating = this.userRating;
    let counter = 0;
    while (tempUserRating -= 1 ) {
      this.userRatingArr[counter += 1] = 1;
    }
  }

}
