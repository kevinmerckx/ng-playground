import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseBComponent } from './case-b.component';

describe('CaseBComponent', () => {
  let component: CaseBComponent;
  let fixture: ComponentFixture<CaseBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
