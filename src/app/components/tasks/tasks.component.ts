import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Task } from 'src/app/models/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../dialog/edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks: Task[];

  // Every time when tasks changed we update data source and paginator with new data
  @Input('tasks')
  private set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  @Output()
  updateTask = new EventEmitter<Task>();

  
  columnsToDisplay: string[] = ['color', 'position', 'name', 'category', 'priority', 'date'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataHandler: DataHandlerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();

    this.fillTable();
  }

  ngAfterViewInit() {
    this.fillTable();
  }

  openEdtiTaskDialog(task: Task): void {
    // Open dialog window. First arg - ref for component or html template,
    // second arg - config - in {}. Data is passing in Component 
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {data: [task, 'Редактирование задачи'], autoFocus: false });
    // When window is closed - this method runs and get result. 
    // We can make some actions or handle result (what we return from dialog window) in {}
    dialogRef.afterClosed().subscribe(result =>{
      if (result as Task){
        this.updateTask.emit(result);
        return;
      }
    });
  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color
    }
    else {
      return '#b5b0b4'
    }
  }

  toggleTaskCompleted(task: Task) {
    task.is_completed = !task.is_completed;
  }


  fillTable() {
    // If datasource is undefined
    if (!this.dataSource) {
      return;
    }

    this.dataSource.data = this.tasks;
    this.addTableComponents();
    this.dataSource.sortingDataAccessor = (task, property) => {

      switch (property) {

        case 'name': {
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

  addTableComponents() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
