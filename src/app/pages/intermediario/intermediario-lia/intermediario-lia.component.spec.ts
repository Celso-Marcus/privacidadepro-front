import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioLiaComponent } from './intermediario-lia.component';

describe('IntermediarioLiaComponent', () => {
  let component: IntermediarioLiaComponent;
  let fixture: ComponentFixture<IntermediarioLiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioLiaComponent]
    });
    fixture = TestBed.createComponent(IntermediarioLiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
