import { TaskDAO } from '../interfaces/TaskDAO';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Priority } from 'src/app/models/Priority';
import { Task } from 'src/app/models/Task';
import { TestData } from '../../TestData';


export class TaskDAOImplement implements TaskDAO {

    // We have method that get query from datahandler with some data and
    // And then it throws it to inner method...

    // After inner method data return, main method returns observble task array
    find(query: string, category: Category, priority: Priority, status: boolean): Observable<Task[]> {
        return of(this.seacrhTask(query, category, priority, status));
    }
    // And that inner method filtering task array based on got data
    private seacrhTask(query: string, category: Category, priority: Priority, status: boolean){
        let allTasks = TestData.tasks;

        if (category != null){
           allTasks = allTasks.filter(task => task.category === category);
            return allTasks;
        }
        return allTasks;
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
    update(task: Task): Observable<Task> {
        const taskToDelete = TestData.tasks.find(t => t.id === task.id);
        TestData.tasks.splice(TestData.tasks.indexOf(taskToDelete), 1, task);
        return of (task);

    }
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Task[]> {
        return of(TestData.tasks);
    }

}