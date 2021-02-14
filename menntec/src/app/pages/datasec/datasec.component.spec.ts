import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecComponent } from './datasec.component';

describe('DatasecComponent', () => {
  let component: DatasecComponent;
  let fixture: ComponentFixture<DatasecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
