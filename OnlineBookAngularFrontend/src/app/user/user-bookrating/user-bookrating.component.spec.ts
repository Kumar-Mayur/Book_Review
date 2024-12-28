import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookratingComponent } from './user-bookrating.component';

describe('UserBookratingComponent', () => {
  let component: UserBookratingComponent;
  let fixture: ComponentFixture<UserBookratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
