import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialInventarioComponent } from './inicial-inventario.component';

describe('InicialInventarioComponent', () => {
  let component: InicialInventarioComponent;
  let fixture: ComponentFixture<InicialInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialInventarioComponent]
    });
    fixture = TestBed.createComponent(InicialInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
