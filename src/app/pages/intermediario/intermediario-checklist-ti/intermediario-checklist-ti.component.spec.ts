import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioChecklistTiComponent } from './intermediario-checklist-ti.component';

describe('IntermediarioChecklistTiComponent', () => {
  let component: IntermediarioChecklistTiComponent;
  let fixture: ComponentFixture<IntermediarioChecklistTiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioChecklistTiComponent]
    });
    fixture = TestBed.createComponent(IntermediarioChecklistTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
