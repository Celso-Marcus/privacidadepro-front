import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialDpoComponent } from './inicial-dpo.component';

describe('InicialDpoComponent', () => {
  let component: InicialDpoComponent;
  let fixture: ComponentFixture<InicialDpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialDpoComponent]
    });
    fixture = TestBed.createComponent(InicialDpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
