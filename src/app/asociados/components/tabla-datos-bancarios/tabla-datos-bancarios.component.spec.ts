import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosBancariosComponent } from './tabla-datos-bancarios.component';

describe('TablaDatosBancariosComponent', () => {
  let component: TablaDatosBancariosComponent;
  let fixture: ComponentFixture<TablaDatosBancariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDatosBancariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDatosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
