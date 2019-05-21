import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuAreaComponent } from './custom-menu-area.component';

describe('CustomMenuAreaComponent', () => {
  let component: CustomMenuAreaComponent;
  let fixture: ComponentFixture<CustomMenuAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMenuAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMenuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
