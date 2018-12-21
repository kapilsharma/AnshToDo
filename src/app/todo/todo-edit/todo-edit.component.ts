import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id;

  constructor(
    public toDoService: ToDoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

}
