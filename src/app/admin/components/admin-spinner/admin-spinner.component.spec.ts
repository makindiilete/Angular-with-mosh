import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpinnerComponent } from './admin-spinner.component';

describe('AdminSpinnerComponent', () => {
  let component: AdminSpinnerComponent;
  let fixture: ComponentFixture<AdminSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
