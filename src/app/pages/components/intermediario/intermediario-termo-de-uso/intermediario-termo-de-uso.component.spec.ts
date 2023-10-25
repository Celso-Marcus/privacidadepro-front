import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioTermoDeUsoComponent } from './intermediario-termo-de-uso.component';

describe('IntermediarioTermoDeUsoComponent', () => {
  let component: IntermediarioTermoDeUsoComponent;
  let fixture: ComponentFixture<IntermediarioTermoDeUsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioTermoDeUsoComponent]
    });
    fixture = TestBed.createComponent(IntermediarioTermoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
