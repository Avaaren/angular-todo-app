import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service'
import { Category } from 'src/app/models/Category';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentCategory: Category;
  categories: Category[];
  tasks: Task[];

  constructor(private dataHandler: DataHandlerService ) { }

  ngOnInit() {
    this.dataHandler.categorySubject.subscribe( categories => this.categories = categories);

  }
  showTasksByCategory(category: Category){
    this.currentCategory = category;
    this.dataHandler.getTasksByCategory(category)
  }
}
