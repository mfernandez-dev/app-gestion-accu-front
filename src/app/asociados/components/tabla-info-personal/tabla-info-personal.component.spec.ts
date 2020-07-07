import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfoPersonalComponent } from './tabla-info-personal.component';

describe('TablaInfoPersonalComponent', () => {
  let component: TablaInfoPersonalComponent;
  let fixture: ComponentFixture<TablaInfoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInfoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
