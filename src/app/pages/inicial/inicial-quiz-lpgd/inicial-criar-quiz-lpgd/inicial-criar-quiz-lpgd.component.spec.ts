import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialCriarQuizLpgdComponent } from './inicial-criar-quiz-lpgd.component';

describe('InicialCriarQuizLpgdComponent', () => {
  let component: InicialCriarQuizLpgdComponent;
  let fixture: ComponentFixture<InicialCriarQuizLpgdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialCriarQuizLpgdComponent]
    });
    fixture = TestBed.createComponent(InicialCriarQuizLpgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
