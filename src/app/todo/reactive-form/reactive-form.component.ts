import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  todoForm: FormGroup;
  todoModel: ToDo;

  constructor(private formBuilder: FormBuilder, private toDoService: ToDoService) { }

  ngOnInit() {
    this.todoModel = new ToDo('', '', false);
    this.generateForm();
  }

  generateForm() {
    this.todoForm = this.formBuilder.group({
      name: this.todoModel.name,
      category: this.todoModel.category,
      status: this.todoModel.status,
    });
  }

  onSubmitClicked() {
    const formValues = this.todoForm.value;
    this.toDoService.tasks.push(
      new ToDo(formValues.name, formValues.category, formValues.status)
    );
    this.todoForm.reset();
  }

}
