import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEditarAsociadoComponent } from './pantalla-editar-asociado.component';

describe('PantallaEditarAsociadoComponent', () => {
  let component: PantallaEditarAsociadoComponent;
  let fixture: ComponentFixture<PantallaEditarAsociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaEditarAsociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaEditarAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
