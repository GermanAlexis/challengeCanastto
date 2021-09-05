import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryoneComponent } from './categoryone.component';

describe('CategoryoneComponent', () => {
  let component: CategoryoneComponent;
  let fixture: ComponentFixture<CategoryoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
