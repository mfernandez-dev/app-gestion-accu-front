import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsociadosComponent } from './tabla-asociados.component';

describe('TablaAsociadosComponent', () => {
  let component: TablaAsociadosComponent;
  let fixture: ComponentFixture<TablaAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
