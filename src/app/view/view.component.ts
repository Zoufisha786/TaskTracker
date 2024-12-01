// src/app/view/view.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  tableData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tableData = this.dataService.getData();
  }
}
