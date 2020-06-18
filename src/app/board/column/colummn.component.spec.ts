import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColummnComponent } from './colummn.component';

describe('ColummnComponent', () => {
  let component: ColummnComponent;
  let fixture: ComponentFixture<ColummnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColummnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColummnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
