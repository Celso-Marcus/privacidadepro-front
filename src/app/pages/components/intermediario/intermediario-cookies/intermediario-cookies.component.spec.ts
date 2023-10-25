import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediarioCookiesComponent } from './intermediario-cookies.component';

describe('IntermediarioCookiesComponent', () => {
  let component: IntermediarioCookiesComponent;
  let fixture: ComponentFixture<IntermediarioCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediarioCookiesComponent]
    });
    fixture = TestBed.createComponent(IntermediarioCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
