import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  toDoModel: ToDo;
  toDoService: ToDoService;

  constructor(toDoService: ToDoService) {
    this.toDoService = toDoService;
  }

  ngOnInit() {
    this.toDoModel = new ToDo('', '', false);
  }

  onSubmitClicked(refForm) {
    const formValues = refForm.value;
    this.toDoService.tasks.push(
      new ToDo(formValues.name, formValues.category, formValues.status)
    );
    refForm.reset();
  }
}
