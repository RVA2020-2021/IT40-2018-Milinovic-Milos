import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmijerDialogComponent } from './smijer-dialog.component';

describe('SmijerDialogComponent', () => {
  let component: SmijerDialogComponent;
  let fixture: ComponentFixture<SmijerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmijerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmijerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
