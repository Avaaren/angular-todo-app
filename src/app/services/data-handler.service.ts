import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { TestData } from '../data/TestData';
import { Task } from '../models/Task';
import { BehaviorSubject, Observable } from 'rxjs';

import { CategoryDAOImplement } from '../data/dao/implements/CategoryDAOImpement';
import { TaskDAOImplement } from '../data/dao/implements/TaskDAOImpement';
import { Priority } from '../models/Priority';
import { PriorityDAOImplement } from '../data/dao/implements/PriorityDAOImpement';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  categoryImplementation = new CategoryDAOImplement();
  taskImplementation = new TaskDAOImplement();
  priorityImplementation = new PriorityDAOImplement();
  constructor() {

   }
   getAllPriorities(): Observable<Priority[]>{
     return this.priorityImplementation.getAll();
   }

   getAllCategories(): Observable<Category[]> {
    return this.categoryImplementation.getAll();
   }

   getAllTasks(): Observable<Task[]>{
     return this.taskImplementation.getAll();
   }
   
   // This method needed for calling by component. It observable task array by redirect for DAO method
   findTask(query: string, category: Category, priority: Priority, status: boolean): Observable<Task[]>{
    return this.taskImplementation.find(
      null,
      category,
      null,
      null,
    );
   }

   updateTask(task: Task){
    return this.taskImplementation.update(task);
   }
}
