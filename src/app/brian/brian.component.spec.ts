import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrianComponent } from './brian.component';

describe('BrianComponent', () => {
  let component: BrianComponent;
  let fixture: ComponentFixture<BrianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
