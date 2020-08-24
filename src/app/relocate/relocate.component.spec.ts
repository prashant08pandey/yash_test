import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocateComponent } from './relocate.component';

describe('RelocateComponent', () => {
  let component: RelocateComponent;
  let fixture: ComponentFixture<RelocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
