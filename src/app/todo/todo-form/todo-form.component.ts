import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [ToDoService]
})
export class TodoFormComponent implements OnInit {

  @Output() addNewToDo = new EventEmitter();

  name: string = "";
  category: string = "";
  status: boolean = false;

  toDoService: ToDoService;

  constructor(toDoService: ToDoService) {
    this.toDoService = toDoService;
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );

    this.addNewToDo.emit();
  }
}
