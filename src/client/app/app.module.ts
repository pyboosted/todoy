import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    TodoModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
