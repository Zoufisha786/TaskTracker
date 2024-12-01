import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any[] = [];

  constructor() { }
  addData(data: any) {
    this.formData.push(data);
  }

  getData(): any[] {
    return this.formData;
}
}
