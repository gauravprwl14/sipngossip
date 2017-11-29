import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../shared/utils/constant';
import { galleryItemsArr } from '../../shared/fakeData/gallery/index';
import GalleryItemModel from '../../shared/models/gallery/gallery-item.model';

@Component({
  selector: 'app-gallery-images-container',
  templateUrl: './gallery-images-container.component.html',
  styleUrls: ['./gallery-images-container.component.scss']
})
export class GalleryImagesContainerComponent implements OnInit {
  appConstants = AppConstants;
  activeGallery: string = AppConstants.galleryCategory.all;
  galleryItems: GalleryItemModel[] = this.filterGalleryItemArr(this.activeGallery, galleryItemsArr);
  constructor() { }

  ngOnInit() {
  }

   filterGalleryItemArr(activeGallery: string = AppConstants.galleryCategory.all,  masterGalleryItemsArr) {
    if (activeGallery === AppConstants.galleryCategory.all) {
      console.log('%c galleryItems ', 'background: lime; color: black', [...masterGalleryItemsArr]);
      return [...masterGalleryItemsArr];
    }
    const filteredGalleryItemResult =  masterGalleryItemsArr.filter((galleryItemObj) => galleryItemObj.category === activeGallery);
    return filteredGalleryItemResult;
  }

  handleGalleryCategoryChange(event, updateActiveGalleryCategory) {
    if (this.activeGallery !== updateActiveGalleryCategory) {
      this.galleryItems = this.filterGalleryItemArr(updateActiveGalleryCategory, galleryItemsArr);
      this.activeGallery = updateActiveGalleryCategory;
    }
  }

}
