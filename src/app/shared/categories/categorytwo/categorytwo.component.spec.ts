import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytwoComponent } from './categorytwo.component';

describe('CategorytwoComponent', () => {
  let component: CategorytwoComponent;
  let fixture: ComponentFixture<CategorytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorytwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
