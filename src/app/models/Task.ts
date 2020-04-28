import { Priority } from './Priority'
import { Category } from './Category'

export class Task {
    id: number;
    title: string;
    is_completed: boolean;
    priority?: Priority;
    category?: Category;
    date?: Date;

    constructor(id: number, title: string, is_completed: boolean, priority?: Priority, category?: Category, date?: Date) {
        this.id = id;
        this.title = title;
        this.is_completed = is_completed;
        this.priority = priority;
        this.category = category;
        this.date = date;
    }
}