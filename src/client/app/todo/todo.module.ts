import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule }   from '@angular/forms';

import { TodoComponent } from './todo.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  declarations: [
    TodoComponent,
    DashboardComponent,
    CreateComponent
  ],
  providers: [
  ]
})
export class TodoModule { }
