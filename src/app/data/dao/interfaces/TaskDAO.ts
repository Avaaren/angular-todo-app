import { CommonDAO } from './CommonDAO';
import { Task } from 'src/app/models/Task';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Priority } from 'src/app/models/Priority';

export interface CategoryDAO extends CommonDAO<Task> {
    
    find(query: string, category: Category, priority: Priority, status: boolean): Observable<Task[]>;

    getCompletedCountInCategory(category: Category): Observable<number>;

    getUncompletedCountInCategory(category: Category): Observable<number>;

    getTotalCountInCategory(category: Category): Observable<number>;

    getTotalCount(): Observable<number>;

}