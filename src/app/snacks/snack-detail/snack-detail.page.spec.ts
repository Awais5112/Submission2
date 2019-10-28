import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackDetailPage } from './snack-detail.page';

describe('SnackDetailPage', () => {
  let component: SnackDetailPage;
  let fixture: ComponentFixture<SnackDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
