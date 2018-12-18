import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() task: ToDo;

  constructor() { }

  ngOnInit() {
  }

}
