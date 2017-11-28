import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageSliderSectionComponent } from './gallery-page-slider-section.component';

describe('GalleryPageSliderSectionComponent', () => {
  let component: GalleryPageSliderSectionComponent;
  let fixture: ComponentFixture<GalleryPageSliderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPageSliderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageSliderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
