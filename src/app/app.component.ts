import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  showLoader = true;
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', (event) => {
      setTimeout(() => {
        this.showLoader = false;
      }, 2000);
    });
  }
}
