import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent implements OnInit {

  constructor() { }

  title = 'app';
  showLoader = true;
  ngOnInit() {
    window.addEventListener('load', (event) => {
      setTimeout(() => {
        this.showLoader = false;
      }, 2000);
    });
  }

}
