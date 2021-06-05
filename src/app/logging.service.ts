import { Injectable } from '@angular/core';
import { LoggingLevel } from './enum/logging-levels.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public debug (message: string) {
    this.log(LoggingLevel.DEBUG, message);
  }

  public info (message: string) {
    this.log(LoggingLevel.INFO, message);
  }

  public warn (message: string) {
    this.log(LoggingLevel.WARNING, message);
  }

  public error (message: string) {
    this.log(LoggingLevel.ERROR, message);
  }

  private log (level: LoggingLevel, message: string) {
    let timestamp: Date = new Date();
    console.log(timestamp.toISOString() + " - " + level + " - " + message);
  }
}
