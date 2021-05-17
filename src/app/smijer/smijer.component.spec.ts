import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmijerComponent } from './smijer.component';

describe('SmijerComponent', () => {
  let component: SmijerComponent;
  let fixture: ComponentFixture<SmijerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmijerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmijerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
