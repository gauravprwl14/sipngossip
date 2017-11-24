import { Injectable } from '@angular/core';

@Injectable()
export class HandleLoadingIndicatorService {
  showLoader = false;
  constructor() {
  }
  getLoaderValue() {
    return this.showLoader;
  }
  setLoaderValue(value) {
    this.showLoader = value;
  }
}
