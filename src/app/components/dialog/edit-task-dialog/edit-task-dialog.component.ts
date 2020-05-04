import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/Task';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Category } from 'src/app/models/Category';
import { Priority } from 'src/app/models/Priority';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(
    // Ref for dialog window. Needed for working with d-log windw and parent component
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    // Needed for working with data from parent component
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dataHandler: DataHandlerService,
    private dialog: MatDialog,
  ) { }


  dialogTitle: string;
  task: Task;
  tmpTitle: string;
  tmpCategory: Category;
  tmpPriority: Priority;
  tmpDate: any;

  categories: Category[];
  priorities: Priority[];

  ngOnInit(): void {
    // Passing into variables data, passed from parent component
    this.dialogTitle = this.data[1];
    this.task = this.data[0];
    //Todo: Date component throw undefined errors in console!!!!
    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;
    this.tmpPriority = this.task.priority;
    this.tmpDate = this.task.date;

    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    this.dataHandler.getAllPriorities().subscribe(priorities => this.priorities = priorities);

  }

  onConfirm() {
    this.task.title = this.tmpTitle;
    this.task.category = this.tmpCategory;
    this.task.priority = this.tmpPriority;
    this.task.date = this.tmpDate;
    
    
    this.dialogRef.close(this.task)
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onDelete(task: Task) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: ['Вы действительно хотите удалить задачу?', 'Удаление задачи'],
        autoFocus: false,
        maxWidth: 400
      }
    );
    // When window is closed - this method runs and get result. 
    // We can make some actions or handle result (what we return from dialog window) in {}
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.dialogRef.close('delete');
        return;
      }
    });
  }

  onToggleStatus(){
    this.task.is_completed = !this.task.is_completed;
    this.dialogRef.close(this.task);
  }
}
