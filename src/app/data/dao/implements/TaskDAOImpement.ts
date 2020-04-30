import { TaskDAO } from '../interfaces/TaskDAO';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Priority } from 'src/app/models/Priority';
import { Task } from 'src/app/models/Task';


export class TaskDAOImplement implements TaskDAO {
    find(query: string, category: Category, priority: Priority, status: boolean): Observable<Task[]> {
        throw new Error("Method not implemented.");
    }
    getCompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getUncompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCount(): Observable<number> {
        throw new Error("Method not implemented.");
    }
    add(T: any): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Task[]> {
        throw new Error("Method not implemented.");
    }

}