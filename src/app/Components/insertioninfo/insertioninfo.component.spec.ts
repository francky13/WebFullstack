import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertioninfoComponent } from './insertioninfo.component';

describe('InsertioninfoComponent', () => {
  let component: InsertioninfoComponent;
  let fixture: ComponentFixture<InsertioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertioninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
