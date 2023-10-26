import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoPoliticaSegurancaComponent } from './avancado-politica-seguranca.component';

describe('AvancadoPoliticaSegurancaComponent', () => {
  let component: AvancadoPoliticaSegurancaComponent;
  let fixture: ComponentFixture<AvancadoPoliticaSegurancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvancadoPoliticaSegurancaComponent]
    });
    fixture = TestBed.createComponent(AvancadoPoliticaSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
