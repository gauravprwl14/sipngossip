import { Component, OnInit } from '@angular/core';
import { menuItemArray } from '../shared/fakeData/menuItem/index';
import MenuItemModel from '../shared/models/menu-item/menu-item.model';
import { AppConstants } from '../shared/utils/constant';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  appConstants = AppConstants;
  activeMenu: string = AppConstants.menuCategory.drinks;
  menuItems: MenuItemModel[] = this.filterMenuItemArr(this.activeMenu, menuItemArray);
  constructor() { }

  ngOnInit() {
  }

  filterMenuItemArr(activeMenuItem = AppConstants.menuCategory.starters, masterMenuItemArr) {
    const filteredMenuItemResult = masterMenuItemArr.filter((menuItemObj) => menuItemObj.category === activeMenuItem);
    return filteredMenuItemResult;
  }

  handleMenuItemChange(event, updateActiveMenuItemValue) {
    if (this.activeMenu !== updateActiveMenuItemValue) {
      this.menuItems = this.filterMenuItemArr(updateActiveMenuItemValue, menuItemArray);
      this.activeMenu = updateActiveMenuItemValue;
    }
  }

}
