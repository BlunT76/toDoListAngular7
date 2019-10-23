import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-to-do-list',
  templateUrl: './show-to-do-list.component.html',
  styleUrls: ['./show-to-do-list.component.css']
})

export class ShowToDoListComponent {
  list = [];
  @Input() message: string;

  addTask(task: string) {
    // prevent adding existing tasks
    if (this.list.includes(task)) {
      return;
    }
    this.list.push(task);
  }

  deleteTask(i: number) {
    this.list.splice(i, 1)
  }

  markTaskDone(i: number) {
    const element = document.getElementsByClassName('task')[i] as HTMLElement;
    if (element.style.backgroundColor === "rgb(92, 230, 124)") {
      element.style.backgroundColor = '#BEE5EB';
      return;
    }
    element.style.backgroundColor = "rgb(92, 230, 124)";
  }
}
