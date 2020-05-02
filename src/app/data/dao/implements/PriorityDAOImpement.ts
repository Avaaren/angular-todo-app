import { PriorityDAO } from '../interfaces/PriorityDAO';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Priority } from 'src/app/models/Priority';
import { Task } from 'src/app/models/Task';
import { TestData } from '../../TestData';


export class PriorityDAOImplement implements PriorityDAO {
    add(T: any): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Priority[]> {
        return of(TestData.priorities);
    }
    
}