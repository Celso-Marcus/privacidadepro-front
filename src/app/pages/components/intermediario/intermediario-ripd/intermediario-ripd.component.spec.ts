import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioRIPDComponent } from './intermediario-ripd.component';

describe('IntermediarioRIPDComponent', () => {
  let component: IntermediarioRIPDComponent;
  let fixture: ComponentFixture<IntermediarioRIPDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioRIPDComponent]
    });
    fixture = TestBed.createComponent(IntermediarioRIPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
