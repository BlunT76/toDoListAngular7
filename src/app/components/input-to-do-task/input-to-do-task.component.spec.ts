import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToDoTaskComponent } from './input-to-do-task.component';

describe('InputToDoTaskComponent', () => {
  let component: InputToDoTaskComponent;
  let fixture: ComponentFixture<InputToDoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputToDoTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputToDoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
