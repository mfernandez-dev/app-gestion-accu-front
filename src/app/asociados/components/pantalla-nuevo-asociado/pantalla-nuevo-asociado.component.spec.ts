import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaNuevoAsociadoComponent } from './pantalla-nuevo-asociado.component';

describe('PantallaNuevoAsociadoComponent', () => {
  let component: PantallaNuevoAsociadoComponent;
  let fixture: ComponentFixture<PantallaNuevoAsociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaNuevoAsociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaNuevoAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
