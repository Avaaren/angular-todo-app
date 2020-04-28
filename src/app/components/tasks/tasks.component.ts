import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Task } from 'src/app/models/Task';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  columnsToDisplay: string[] = ['color', 'position', 'name', 'category', 'priority', 'date'];
  dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color ){
      return task.priority.color
    }
    else {
      return '#fff'
    }
  }

  toggleTaskCompleted(task: Task) {
    task.is_completed = !task.is_completed;
  }

  refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
