import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTiControleDeAcessoComponent } from './checklist-ti-controle-de-acesso.component';

describe('ChecklistTiControleDeAcessoComponent', () => {
  let component: ChecklistTiControleDeAcessoComponent;
  let fixture: ComponentFixture<ChecklistTiControleDeAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistTiControleDeAcessoComponent]
    });
    fixture = TestBed.createComponent(ChecklistTiControleDeAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
