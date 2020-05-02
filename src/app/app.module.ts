import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TasksComponent } from './components/tasks/tasks.component';

import{ MatTableModule } from '@angular/material/table';
import{ MatSortModule } from '@angular/material/sort';
import{ MatPaginatorModule } from '@angular/material/paginator';
import{ MatDialogModule } from '@angular/material/dialog';
import { EditTaskDialogComponent } from './components/dialog/edit-task-dialog/edit-task-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasksComponent,
    EditTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  entryComponents: [
    EditTaskDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
