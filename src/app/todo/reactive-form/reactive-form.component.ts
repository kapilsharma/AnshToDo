import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  todoForm: FormGroup;
  multipleToDoForm: FormGroup;
  todoModel: ToDo;

  constructor(private formBuilder: FormBuilder, private toDoService: ToDoService) { }

  ngOnInit() {
    this.todoModel = new ToDo('', '', false);
    this.generateForm();
    this.generateMultipleTodoForm();
  }

  generateForm() {
    this.todoForm = this.getToDoFormGroup();
  }

  get todos(): FormArray { return this.multipleToDoForm.get('todos') as FormArray; }

  generateMultipleTodoForm() {
    const todos = this.formBuilder.array([this.getToDoFormGroup()]);
    this.multipleToDoForm = this.formBuilder.group({
       todos : todos
     });
    console.log(this.multipleToDoForm);
  }

  getToDoFormGroup() {
   return this.formBuilder.group({
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

  addTodoGroup(){
    const formArray = <FormArray>this.multipleToDoForm.get('todos');
    formArray.push(this.getToDoFormGroup());
  }

  onSubmitMultiple(){
    const tdoArray = []
    this.multipleToDoForm.value.todos.forEach(newTodo => {
      tdoArray.push(
        new ToDo(newTodo.name, newTodo.category, newTodo.status)
      );
    });

    this.toDoService.tasks.push(...tdoArray);

  }

  removeToDo(index){
    this.todos.removeAt(index);
  }

  trackContactByFn(index: any, item: any) {
    return index;
  }
}
