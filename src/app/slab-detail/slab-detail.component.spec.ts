import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabDetailComponent } from './slab-detail.component';

describe('SlabDetailComponent', () => {
  let component: SlabDetailComponent;
  let fixture: ComponentFixture<SlabDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlabDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
