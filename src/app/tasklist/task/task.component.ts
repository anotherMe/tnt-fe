import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {

  constructor(private taskService :TaskService ) {
  }

  ngOnInit(): void {
  }

}
