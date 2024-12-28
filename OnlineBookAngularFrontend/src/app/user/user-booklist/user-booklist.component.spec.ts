import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooklistComponent } from './user-booklist.component';

describe('UserBooklistComponent', () => {
  let component: UserBooklistComponent;
  let fixture: ComponentFixture<UserBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
