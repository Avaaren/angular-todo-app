import { Component, OnInit } from '@angular/core';
import { Task } from './models/Task';
import { DataHandlerService } from './services/data-handler.service';
import { Category } from './models/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'todo-app';
  tasks: Task[];
  categories: Category[];

  selectedCategory: Category;

  constructor( private dataHandler: DataHandlerService ){
    
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories)
  }

  // When we catched changing category, we pass in the method selected category, and
  // subscribing for returned array (IDk exactly why subscribe? Anyway we get filtered array...)
  onSelectCategory(category: Category){
    this.selectedCategory = category;

    this.dataHandler.findTask(
      null,
      this.selectedCategory,
      null,
      null,
    ).subscribe(tasks => this.tasks = tasks);
  }

}
