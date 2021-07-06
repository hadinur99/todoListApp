import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false //default value toggle = false
  private subject = new Subject<any>()
  
  constructor() { }

  //toggle button Add Task
  toggleAddTask(): void {
    console.log('hit')
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
