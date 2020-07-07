import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDireccionComponent } from './tabla-direccion.component';

describe('TablaDireccionComponent', () => {
  let component: TablaDireccionComponent;
  let fixture: ComponentFixture<TablaDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
