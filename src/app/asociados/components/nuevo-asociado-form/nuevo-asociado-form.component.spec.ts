import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAsociadoFormComponent } from './nuevo-asociado-form.component';

describe('NuevoAsociadoFormComponent', () => {
  let component: NuevoAsociadoFormComponent;
  let fixture: ComponentFixture<NuevoAsociadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAsociadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAsociadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
