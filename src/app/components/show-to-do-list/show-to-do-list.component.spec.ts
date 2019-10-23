import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToDoListComponent } from './show-to-do-list.component';

describe('ShowToDoListComponent', () => {
  let component: ShowToDoListComponent;
  let fixture: ComponentFixture<ShowToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
