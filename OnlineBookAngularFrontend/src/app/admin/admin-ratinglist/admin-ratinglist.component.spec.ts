import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatinglistComponent } from './admin-ratinglist.component';

describe('AdminRatinglistComponent', () => {
  let component: AdminRatinglistComponent;
  let fixture: ComponentFixture<AdminRatinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRatinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
