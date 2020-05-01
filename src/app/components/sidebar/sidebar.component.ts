import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  selectCategory = new EventEmitter<Category>();

  @Input()
  categories: Category[];

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService ) { }

  ngOnInit() {
    

  }
  showTasksByCategory(category: Category){
    
    if (this.currentCategory === category){
      return;
    }

    this.currentCategory = category

    this.selectCategory.emit(this.currentCategory);
  }
}
