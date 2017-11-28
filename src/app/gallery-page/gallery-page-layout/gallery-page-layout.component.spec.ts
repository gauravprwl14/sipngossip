import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageLayoutComponent } from './gallery-page-layout.component';

describe('GalleryPageLayoutComponent', () => {
  let component: GalleryPageLayoutComponent;
  let fixture: ComponentFixture<GalleryPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
