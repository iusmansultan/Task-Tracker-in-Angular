import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false,
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskToggle: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    console.log(task.id);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onTaskToggle.emit(task);
  }
}
