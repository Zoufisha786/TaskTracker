import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {
  TableData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.TableData = this.dataService.getData();  
  }

  confirmDelete(index: number) {
    const task = this.TableData[index];
    const confirmation = window.confirm(`Are you sure you want to delete the task: ${task.Title}?`);
    if (confirmation) {
      this.deleteTask(index);
    }
  }

  deleteTask(index: number) {
    this.TableData.splice(index, 1);
  }
}
