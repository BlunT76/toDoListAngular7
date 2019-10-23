import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})

export class Button2Component {
  @Output() sendNewTask: EventEmitter<boolean> = new EventEmitter();

  onKey(event: any) {
    
  }
  onClickMe() {
      this.sendNewTask.emit(true);
    }
}
