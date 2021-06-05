import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { TaskService } from './task.service';
import { Task } from './task/task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.less']
})
export class TasklistComponent implements OnInit {

  private taskList :Task[] = [];

  constructor(private logging: LoggingService, private taskService : TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
  }

  addNewTask() {
    this.logging.info("Add new task !");
    this.taskService.addTask("Yargla");
  }

  public getTaskList() :Task[] {
    return this.taskList;
  }

}
