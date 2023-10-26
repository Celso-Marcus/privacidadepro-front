import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoIncidentesComponent } from './avancado-incidentes.component';

describe('AvancadoIncidentesComponent', () => {
  let component: AvancadoIncidentesComponent;
  let fixture: ComponentFixture<AvancadoIncidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvancadoIncidentesComponent]
    });
    fixture = TestBed.createComponent(AvancadoIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
