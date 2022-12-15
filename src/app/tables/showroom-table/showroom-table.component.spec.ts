import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomTableComponent } from './showroom-table.component';

describe('ShowroomTableComponent', () => {
  let component: ShowroomTableComponent;
  let fixture: ComponentFixture<ShowroomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
