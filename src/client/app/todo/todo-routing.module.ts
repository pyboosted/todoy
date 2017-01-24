import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [{
  path: 'app',
  component: TodoComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'create',
    component: CreateComponent
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }
