import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  TableData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.TableData = this.dataService.getData();
    
  }

  editingTask: any = null;
  editingIndex: number = -1;

  editTask(task: any, index: number) {
    this.editingTask = { ...task };
    this.editingIndex = index;
  }

  updateTask() {
    if (this.editingIndex !== -1) {
      this.TableData[this.editingIndex] = this.editingTask;
      this.editingTask = null;
      this.editingIndex = -1;
    }
  }

  cancelEdit() {
    this.editingTask = null;
    this.editingIndex = -1;
  }

}
