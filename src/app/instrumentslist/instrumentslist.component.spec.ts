import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentslistComponent } from './instrumentslist.component';

describe('InstrumentslistComponent', () => {
  let component: InstrumentslistComponent;
  let fixture: ComponentFixture<InstrumentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
