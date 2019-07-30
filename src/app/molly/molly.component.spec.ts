import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MollyComponent } from './molly.component';

describe('MollyComponent', () => {
  let component: MollyComponent;
  let fixture: ComponentFixture<MollyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MollyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
