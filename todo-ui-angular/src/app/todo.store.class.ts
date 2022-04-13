import { BehaviorSubject, Observable } from "rxjs";

export class ToDoStore<T> {
    private state$: BehaviorSubject<T>;

    constructor(initialState: T){
        this.state$ = new BehaviorSubject(initialState);
    }

    getValue(): T {
        return this.state$.getValue();
    }

    getState(): Observable<T> {
        return this.state$.asObservable();
    }

    setState(nextState: T): void {
        this.state$.next(nextState);
    }
}