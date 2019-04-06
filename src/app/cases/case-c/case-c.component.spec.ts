import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCComponent } from './case-c.component';

describe('CaseCComponent', () => {
  let component: CaseCComponent;
  let fixture: ComponentFixture<CaseCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
