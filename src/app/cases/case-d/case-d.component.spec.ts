import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDComponent } from './case-d.component';

describe('CaseDComponent', () => {
  let component: CaseDComponent;
  let fixture: ComponentFixture<CaseDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
