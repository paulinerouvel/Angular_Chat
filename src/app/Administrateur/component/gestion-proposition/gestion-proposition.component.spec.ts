import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPropositionComponent } from './gestion-proposition.component';

describe('GestionPropositionComponent', () => {
  let component: GestionPropositionComponent;
  let fixture: ComponentFixture<GestionPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
