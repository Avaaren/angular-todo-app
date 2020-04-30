import { CommonDAO } from './CommonDAO';
import { Category } from 'src/app/models/Category';
import { Observable } from 'rxjs';

export interface CategoryDAO extends CommonDAO<Category> {
    
    find(query: string): Observable<Category[]>;
}