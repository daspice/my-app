import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  name = ''
  primeName = ''
  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.name = data['name']
    })
    this.route.queryParams.subscribe((data) => {
      this.primeName = data['primeName']
    })
  }
}