import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialEvidenciasComponent } from './inicial-evidencias.component';

describe('InicialEvidenciasComponent', () => {
  let component: InicialEvidenciasComponent;
  let fixture: ComponentFixture<InicialEvidenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialEvidenciasComponent]
    });
    fixture = TestBed.createComponent(InicialEvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
