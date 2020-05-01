import { CategoryDAO } from '../interfaces/CategoryDAO';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { TestData } from '../../TestData';

export class CategoryDAOImplement implements CategoryDAO {

    find(query: string): Observable<Category[]> {
        throw new Error("Method not implemented.");
    }


    add(T: any): Observable<Category> {
        throw new Error("Method not implemented.");
    }


    get(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }


    delete(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }


    getAll(): Observable<Category[]> {
        return of(TestData.categories);
    }
    
}
