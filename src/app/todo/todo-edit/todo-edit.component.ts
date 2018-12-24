import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryComponent } from 'src/app/category/category.component';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  id;
  paramSubscription;
  @ViewChild('category') category: ElementRef;

  constructor(
    public toDoService: ToDoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  onSubmitClicked(
    name: HTMLInputElement,
    status: HTMLInputElement
  ) {
    this.toDoService.tasks[this.id].name = name.value;
    this.toDoService.tasks[this.id].category = this.category.nativeElement.value;
    this.toDoService.tasks[this.id].status = status.checked;
  }

}
