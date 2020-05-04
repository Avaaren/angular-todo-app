import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/Task';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    // Needed for working with data from parent component
    @Inject(MAT_DIALOG_DATA) private data: [string, string],
    private dataHandler: DataHandlerService,
    private dialog: MatDialog,) { }

    dialogTitle: string;
    message: string;
    task: Task;

  ngOnInit(): void {
    this.dialogTitle = this.data[1],
    this.message = this.data[0]
  }

  onConfirm(){
    this.dialogRef.close(true);
    return;
  }

  onCancel(){
    this.dialogRef.close(null);
    return;
  }

}
