import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorychildComponent } from './categorychild.component';

describe('CategorychildComponent', () => {
  let component: CategorychildComponent;
  let fixture: ComponentFixture<CategorychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorychildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
