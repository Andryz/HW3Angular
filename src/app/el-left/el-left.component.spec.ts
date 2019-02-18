import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElLeftComponent } from './el-left.component';

describe('ElLeftComponent', () => {
  let component: ElLeftComponent;
  let fixture: ComponentFixture<ElLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
