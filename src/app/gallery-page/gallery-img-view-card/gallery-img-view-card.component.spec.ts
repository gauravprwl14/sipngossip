import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImgViewCardComponent } from './gallery-img-view-card.component';

describe('GalleryImgViewCardComponent', () => {
  let component: GalleryImgViewCardComponent;
  let fixture: ComponentFixture<GalleryImgViewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryImgViewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImgViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
