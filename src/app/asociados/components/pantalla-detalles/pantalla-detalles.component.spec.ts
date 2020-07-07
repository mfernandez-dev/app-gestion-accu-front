import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDetallesComponent } from './pantalla-detalles.component';

describe('PantallaDetallesComponent', () => {
  let component: PantallaDetallesComponent;
  let fixture: ComponentFixture<PantallaDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
