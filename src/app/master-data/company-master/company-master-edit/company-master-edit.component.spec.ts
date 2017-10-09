import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMasterEditComponent } from './company-master-edit.component';

describe('CompanyMasterEditComponent', () => {
  let component: CompanyMasterEditComponent;
  let fixture: ComponentFixture<CompanyMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
