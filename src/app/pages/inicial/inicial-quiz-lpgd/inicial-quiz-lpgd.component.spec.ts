import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialQuizLpgdComponent } from './inicial-quiz-lpgd.component';

describe('InicialQuizLpgdComponent', () => {
  let component: InicialQuizLpgdComponent;
  let fixture: ComponentFixture<InicialQuizLpgdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialQuizLpgdComponent]
    });
    fixture = TestBed.createComponent(InicialQuizLpgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
