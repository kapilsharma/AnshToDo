import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() editToDoButtonClicked = new EventEmitter<{index: number}>()

  constructor(toDoService: ToDoService) {
    this.todos = toDoService.tasks;
  }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }

  onEditButtonClicked(index) {
    this.editToDoButtonClicked.emit({
      'index': index
    });
  }

}
