import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventComponent } from './add-edit-event.component';

describe('AddEditCoursesComponent', () => {
  let component: AddEditEventComponent;
  let fixture: ComponentFixture<AddEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
