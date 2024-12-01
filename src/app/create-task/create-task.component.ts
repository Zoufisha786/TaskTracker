import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(private dataService: DataService) {
    this.taskForm = new FormGroup({
      TaskId: new FormControl(),
      Title: new FormControl(),
      Description: new FormControl(),
      DueDate: new FormControl(),
      Checked: new FormControl()
    });
  }

  created() {
    this.dataService.addData(this.taskForm.value);
    this.taskForm.reset();
  }
}
