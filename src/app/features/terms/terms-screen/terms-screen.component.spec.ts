import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsScreenComponent } from './terms-screen.component';

describe('TermsScreenComponent', () => {
  let component: TermsScreenComponent;
  let fixture: ComponentFixture<TermsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
