import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';
import { CategoryComponent } from './category/category.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { ReactiveFormComponent } from './todo/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: 'new', component: TodoFormComponent },
      { path: 'newReactive', component: ReactiveFormComponent },
      { path: 'edit/:id', component: TodoEditComponent }
    ]
  },
  { path: 'category', component: CategoryComponent },
  { path: 'test', component: TestComponent},
  { path: '**', redirectTo: 'todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
