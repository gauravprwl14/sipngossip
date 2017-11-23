import { Component, OnInit, Input } from '@angular/core';
import AppConstants from '../utils/constant';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  constructor() { }
  ignoreVegSign = [AppConstants.menuCategory.drinks, AppConstants.menuCategory.dessert];
  @Input() menuItemImgSrcPath: string;
  @Input() menuItemName: string;
  @Input() menuItemDescription: string;
  @Input() menuItemType: boolean;
  @Input() menuItemCategory: string;
  //  @Input() menuItemDescription: string;
  ngOnInit() {
    console.log('menuItemImgSrcPath', this.menuItemImgSrcPath);
  }

}
