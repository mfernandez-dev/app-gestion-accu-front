import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaAsociadosComponent } from './pantalla-asociados.component';

describe('PantallaAsociadosComponent', () => {
  let component: PantallaAsociadosComponent;
  let fixture: ComponentFixture<PantallaAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
