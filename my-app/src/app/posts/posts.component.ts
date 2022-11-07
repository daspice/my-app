import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: string[] = [ 'Новости', 'Развлекательное', 'Обучение', 'Продажа', 'Мотивация', 'Информация' ];

  constructor() { }

  ngOnInit(): void {
  }

}
