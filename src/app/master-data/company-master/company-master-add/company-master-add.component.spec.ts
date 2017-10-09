import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMasterAddComponent } from './company-master-add.component';

describe('CompanyMasterAddComponent', () => {
  let component: CompanyMasterAddComponent;
  let fixture: ComponentFixture<CompanyMasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
