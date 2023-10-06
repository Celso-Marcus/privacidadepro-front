import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialSetorComponent } from './inicial-setor.component';

describe('InicialSetorComponent', () => {
  let component: InicialSetorComponent;
  let fixture: ComponentFixture<InicialSetorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialSetorComponent]
    });
    fixture = TestBed.createComponent(InicialSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
