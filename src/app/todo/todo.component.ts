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

  task: ToDo;
  index: number;

  constructor(toDoService: ToDoService) {
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }

}
