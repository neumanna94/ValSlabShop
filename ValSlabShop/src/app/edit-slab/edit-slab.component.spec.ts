import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlabComponent } from './edit-slab.component';

describe('EditSlabComponent', () => {
  let component: EditSlabComponent;
  let fixture: ComponentFixture<EditSlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
