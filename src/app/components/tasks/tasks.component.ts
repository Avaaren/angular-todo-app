import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe( tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task){
    task.is_completed = !task.is_completed;
  }
}
