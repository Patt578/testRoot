import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSearchFunctionComponent } from './frontend-search-function.component';

describe('FrontendSearchFunctionComponent', () => {
  let component: FrontendSearchFunctionComponent;
  let fixture: ComponentFixture<FrontendSearchFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendSearchFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendSearchFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
