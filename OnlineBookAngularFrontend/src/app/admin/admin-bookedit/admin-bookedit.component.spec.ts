import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookeditComponent } from './admin-bookedit.component';

describe('AdminBookeditComponent', () => {
  let component: AdminBookeditComponent;
  let fixture: ComponentFixture<AdminBookeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
