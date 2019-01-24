import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { ToDoService } from './services/to-do.service';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TestComponent } from './test/test.component';
import { CategoryComponent } from './category/category.component';
import { Test2Component } from './test/test2/test2.component';
import { ReactiveFormComponent } from './todo/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoEditComponent,
    TestComponent,
    CategoryComponent,
    Test2Component,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
