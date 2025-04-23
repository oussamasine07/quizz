import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInfoComponent } from './insert-info.component';

describe('InsertInfoComponent', () => {
  let component: InsertInfoComponent;
  let fixture: ComponentFixture<InsertInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
