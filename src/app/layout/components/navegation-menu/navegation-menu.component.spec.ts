import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationMenuComponent } from './navegation-menu.component';

describe('NavegationMenuComponent', () => {
  let component: NavegationMenuComponent;
  let fixture: ComponentFixture<NavegationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
