import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  constructor() { }
  @Input() menuItemImgSrcPath: string;
  @Input() menuItemName: string;
  @Input() menuItemDescription: string;
  @Input() menuItemType: boolean;
  //  @Input() menuItemDescription: string;
  ngOnInit() {
    console.log('menuItemImgSrcPath', this.menuItemImgSrcPath);
  }

}
