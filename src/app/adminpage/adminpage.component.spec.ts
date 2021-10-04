import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpageComponent } from './adminpage.component';

describe('AdminpageComponent', () => {
  let component: AdminpageComponent;
  let fixture: ComponentFixture<AdminpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Admin Page'`, () => {
    const fixture = TestBed.createComponent(AdminpageComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Admin Page');
  });
});
