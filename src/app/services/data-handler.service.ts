import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { TestData } from '../data/TestData';
import { Task } from '../models/Task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {

   }


   getTasksByCategory(category: Category){
     const task = TestData.tasks.filter(task => task.category === category);
     this.taskSubject.next(task)
  }
}
