import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTsskListComponent } from './todo-tssk-list.component';

describe('TodoTsskListComponent', () => {
  let component: TodoTsskListComponent;
  let fixture: ComponentFixture<TodoTsskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTsskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTsskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
