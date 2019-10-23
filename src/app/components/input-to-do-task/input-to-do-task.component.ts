import { Component } from '@angular/core';

@Component({
  selector: 'app-input-to-do-task',
  templateUrl: './input-to-do-task.component.html',
  styleUrls: ['./input-to-do-task.component.css']
})

export class InputToDoTaskComponent {
  message: string;

  onKey(event: any) {
    this.message = event.target.value;
  }
}
