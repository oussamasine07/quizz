import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataComponent } from './pass-data.component';

describe('PassDataComponent', () => {
  let component: PassDataComponent;
  let fixture: ComponentFixture<PassDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
