import { Component, OnInit } from '@angular/core';
import { menuItemArray } from '../shared/fakeData/menuItem/index';
import MenuItemModel from '../shared/models/menu-item/menu-item.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItemModel[] = menuItemArray;
  constructor() { }

  ngOnInit() {
  }

}
