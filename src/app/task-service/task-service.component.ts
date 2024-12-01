import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-task-service',
  standalone: true,
  imports: [],
  templateUrl: './task-service.component.html',
  styleUrl: './task-service.component.css'
})
export class TaskServiceComponent {
  private taskData = new BehaviorSubject<any[]>([]);
  taskData$ = this.taskData.asObservable();

  addTask(task: any) {
    const currentData = this.taskData.value;
    this.taskData.next([...currentData, task]);
}
}
