import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoCriarIncidentesComponent } from './avancado-criar-incidentes.component';

describe('AvancadoCriarIncidentesComponent', () => {
  let component: AvancadoCriarIncidentesComponent;
  let fixture: ComponentFixture<AvancadoCriarIncidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvancadoCriarIncidentesComponent]
    });
    fixture = TestBed.createComponent(AvancadoCriarIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
