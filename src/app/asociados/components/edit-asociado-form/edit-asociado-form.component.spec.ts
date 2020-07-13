import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsociadoFormComponent } from './edit-asociado-form.component';

describe('EditAsociadoFormComponent', () => {
  let component: EditAsociadoFormComponent;
  let fixture: ComponentFixture<EditAsociadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAsociadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAsociadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
