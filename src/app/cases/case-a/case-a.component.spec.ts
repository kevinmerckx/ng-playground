import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAComponent } from './case-a.component';

describe('CaseAComponent', () => {
  let component: CaseAComponent;
  let fixture: ComponentFixture<CaseAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
