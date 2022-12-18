import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data = ["Tom", "Bob"]
  constructor() { }
  getData(){
    return [...this.data]
  }
  addData(name: string) {
    this.data.push(name)
  }
}