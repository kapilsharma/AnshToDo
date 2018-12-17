import { Component, OnInit } from '@angular/core';

import { ToDo } from '../models/ToDo';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ToDoService]
})
export class TodoComponent implements OnInit {
  tasks;

  listPage = true;
  formPage = false;

  constructor(toDoService: ToDoService) {
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }

  showNewToDoForm(){
    this.listPage = false;
    this.formPage = true;
  }

  onToDoAdded(t) {
    //this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
  }

}