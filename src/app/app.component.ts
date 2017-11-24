import { HandleLoadingIndicatorService } from './shared/service/loading-indicator/handle-loading-indicator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    clearTimeInterval = null;
  // title = 'app';
  showLoader = true;
  // ngOnInit() {
  //   window.addEventListener('load', (event) => {
  //     setTimeout(() => {
  //       this.showLoader = false;
  //     }, 2000);
  //   });
  // }
  constructor(private loadingIndicatorService: HandleLoadingIndicatorService) {
    this.loadingIndicatorService = loadingIndicatorService;
    this.loadingIndicatorService.setLoaderValue(true);
    this.showLoader = this.loadingIndicatorService.getLoaderValue();
    console.log('%c inside constructor  ', 'background: lime; color: black', this.showLoader);
  }
  ngOnInit() {
    window.addEventListener('load', () => {
      this.clearTimeInterval = setTimeout(() => {
        this.loadingIndicatorService.setLoaderValue(false);
        this.showLoader = this.loadingIndicatorService.getLoaderValue();
      }, 500);
    });
  }
}
