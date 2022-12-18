import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluzComponent } from './bluz.component';

describe('BluzComponent', () => {
  let component: BluzComponent;
  let fixture: ComponentFixture<BluzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
