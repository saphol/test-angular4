import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbNameComponent } from './fb-name.component';

describe('FbNameComponent', () => {
  let component: FbNameComponent;
  let fixture: ComponentFixture<FbNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
