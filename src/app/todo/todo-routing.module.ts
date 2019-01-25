import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: TodoComponent },
      { path: 'new', component: TodoFormComponent },
      { path: 'newReactive', component: ReactiveFormComponent },
      { path: 'edit/:id', component: TodoEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
