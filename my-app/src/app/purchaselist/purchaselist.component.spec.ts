import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaselistComponent } from './purchaselist.component';

describe('PurchaselistComponent', () => {
  let component: PurchaselistComponent;
  let fixture: ComponentFixture<PurchaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
