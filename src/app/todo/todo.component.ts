import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = [
      {
        name: 'Angular Session One',
        category: 'CDAC',
        status: true
      },
      {
          name: 'Angular Session Two',
          category: 'CDAC',
          status: false
      },
      {
          name: 'Angular Session Three',
          category: 'CDAC',
          status: false
      }
  ]

  listPage = true;
  formPage = false;

  constructor() { }

  ngOnInit() {
  }

  showNewToDoForm(){
    this.listPage = false;
    this.formPage = true;
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
  }

}
