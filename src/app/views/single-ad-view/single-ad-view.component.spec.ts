import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdViewComponent } from './single-ad-view.component';

describe('SingleAdViewComponent', () => {
  let component: SingleAdViewComponent;
  let fixture: ComponentFixture<SingleAdViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAdViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
