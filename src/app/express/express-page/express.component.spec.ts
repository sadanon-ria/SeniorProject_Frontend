import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressComponent } from './express.component';

describe('ExpressComponent', () => {
  let component: ExpressComponent;
  let fixture: ComponentFixture<ExpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressComponent]
    });
    fixture = TestBed.createComponent(ExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
