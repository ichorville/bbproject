import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMasterDetailsComponent } from './company-master-details.component';

describe('CompanyMasterDetailsComponent', () => {
  let component: CompanyMasterDetailsComponent;
  let fixture: ComponentFixture<CompanyMasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
