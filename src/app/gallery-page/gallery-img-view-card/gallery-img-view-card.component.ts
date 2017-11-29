import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-img-view-card',
  templateUrl: './gallery-img-view-card.component.html',
  styleUrls: ['./gallery-img-view-card.component.scss']
})
export class GalleryImgViewCardComponent implements OnInit {

  constructor() { }
  @Input() galleryItemImgSrcPath: string;
  @Input() galleryItemName: string;
  @Input() galleryItemDescription: string;
  @Input() galleryItemType: boolean;
  @Input() galleryItemCategory: string;
  ngOnInit() {
  }

}
