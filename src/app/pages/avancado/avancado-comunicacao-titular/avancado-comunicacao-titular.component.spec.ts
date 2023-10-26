import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoComunicacaoTitularComponent } from './avancado-comunicacao-titular.component';

describe('AvancadoComunicacaoTitularComponent', () => {
  let component: AvancadoComunicacaoTitularComponent;
  let fixture: ComponentFixture<AvancadoComunicacaoTitularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvancadoComunicacaoTitularComponent]
    });
    fixture = TestBed.createComponent(AvancadoComunicacaoTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
