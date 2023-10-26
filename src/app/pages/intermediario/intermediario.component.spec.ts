import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioComponent } from './intermediario.component';

describe('IntermediarioComponent', () => {
  let component: IntermediarioComponent;
  let fixture: ComponentFixture<IntermediarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioComponent]
    });
    fixture = TestBed.createComponent(IntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
