import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancadoPrivacyByDesignComponent } from './avancado-privacy-by-design.component';

describe('AvancadoPrivacyByDesignComponent', () => {
  let component: AvancadoPrivacyByDesignComponent;
  let fixture: ComponentFixture<AvancadoPrivacyByDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvancadoPrivacyByDesignComponent]
    });
    fixture = TestBed.createComponent(AvancadoPrivacyByDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
