import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/Task';
import { DataHandlerService } from 'src/app/services/data-handler.service';

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

  ngOnInit(): void {
    // Passing into variables data, passed from parent component
    this.dialogTitle = this.data[1];
    this.task = this.data[0];
    this.tmpTitle = this.task.title;
  }

  onConfirm(){
    this.task.title = this.tmpTitle;
    this.dialogRef.close(this.task)
  }

  onCancel(){
    this.dialogRef.close(null);
  }
}
