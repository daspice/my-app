import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {
  
  purchases: string[] = ['Хлеб', 'Овощи', 'Фрукты', 'Молоко', 'Сыр', 'Мясо','Яйца', 'Масло','Крупа'];

  constructor() { }

  ngOnInit(): void {
  }

}
