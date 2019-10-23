import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button2Component } from './components/button2/button2.component';
import { InputToDoTaskComponent } from './components/input-to-do-task/input-to-do-task.component';
import { ShowToDoListComponent } from './components/show-to-do-list/show-to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Button2Component,
    InputToDoTaskComponent,
    ShowToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
