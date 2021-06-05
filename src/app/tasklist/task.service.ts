import { Injectable } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList :Task[] = [];

  constructor(private loggingService :LoggingService) { }

  public addTask(name :string) {
    let task = new Task(name);
    this.taskList.push(task);
  }

  public getTaskList () : Task[] {

    this.loggingService.info("New task list requested");
    this.taskList.push(new Task("Lava i piatti"));
    this.taskList.push(new Task("Prepara da mangiare"));
    this.taskList.push(new Task("Stira le camicie"));
    return this.taskList;
  }

}
