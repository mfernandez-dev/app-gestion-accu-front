import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNuevoAsociadoComponent } from './boton-nuevo-asociado.component';

describe('BotonNuevoAsociadoComponent', () => {
  let component: BotonNuevoAsociadoComponent;
  let fixture: ComponentFixture<BotonNuevoAsociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonNuevoAsociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonNuevoAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
