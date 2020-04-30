import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Task } from 'src/app/models/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  columnsToDisplay: string[] = ['color', 'position', 'name', 'category', 'priority', 'date'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);

    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color ){
      return task.priority.color
    }
    else {
      return '#b5b0b4'
    }
  }

  toggleTaskCompleted(task: Task) {
    task.is_completed = !task.is_completed;
  }

  refreshTable() {
    this.dataSource.data = this.tasks;
    this.dataSource.sortingDataAccessor = (task, property) => {

      switch (property) {

        case 'name':{
          return task.title;
        }

        case 'category': {
          return task.category ? task.category.name : null; 
        }

        case 'date': {

          console.log(task.date);
          return task.date ? task.date.toISOString() : null;
        }

        case 'priority': {
          return task.priority ? task.priority.name : null; 
        }

      }

    };

  }
}
