import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: string[] = ['BMW', 'Mersedes', 'Volvo', 'Toyto', 'KIA'];

  constructor() { }

  ngOnInit(): void {
  }

}
