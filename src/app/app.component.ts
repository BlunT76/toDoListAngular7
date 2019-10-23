import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Button2Component } from './components/button2/button2.component';
import { InputToDoTaskComponent } from './components/input-to-do-task/input-to-do-task.component';
import { ShowToDoListComponent } from './components/show-to-do-list/show-to-do-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To Do List with Angular 7';
  messageFromChild : string;
  @ViewChild(InputToDoTaskComponent) inputTask;
  @ViewChild(ShowToDoListComponent) listView;

  showTask(boolean) {
    // called when we click the Add Task button
    // retrieve the input task and check if empty
    if (this.inputTask.message === undefined || this.inputTask.message === '') {
      return;
    }
    // send the task to the view component
    this.listView.addTask(this.inputTask.message)
  }
}
