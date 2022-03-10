import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryindukComponent } from './categoryinduk.component';

describe('CategoryindukComponent', () => {
  let component: CategoryindukComponent;
  let fixture: ComponentFixture<CategoryindukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryindukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryindukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
