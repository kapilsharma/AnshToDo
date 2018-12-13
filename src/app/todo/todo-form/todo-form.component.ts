import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() addNewToDo = new EventEmitter<{
    name: String,
    category: String,
    status: Boolean
  }>();

  name: string = "";
  category: string = "";
  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.addNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
