import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../shared/utils/constant';

@Component({
  selector: 'app-gallery-images-container',
  templateUrl: './gallery-images-container.component.html',
  styleUrls: ['./gallery-images-container.component.scss']
})
export class GalleryImagesContainerComponent implements OnInit {
  appConstants = AppConstants;
  activeGallery: string = AppConstants.galleryCategory.all;
  constructor() { }

  ngOnInit() {
  }

  handleGalleryCategoryChange(event, updateActiveGalleryCategory) {
    if (this.activeGallery !== updateActiveGalleryCategory) {
      this.activeGallery = updateActiveGalleryCategory;
    }
  }

}
