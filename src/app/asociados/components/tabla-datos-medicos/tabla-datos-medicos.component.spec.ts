import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosMedicosComponent } from './tabla-datos-medicos.component';

describe('TablaDatosMedicosComponent', () => {
  let component: TablaDatosMedicosComponent;
  let fixture: ComponentFixture<TablaDatosMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDatosMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDatosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
