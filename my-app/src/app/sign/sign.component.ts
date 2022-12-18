import { Component, OnInit } from '@angular/core';

export interface HeroLoginDto {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  hero: HeroLoginDto = { email: '', password: '' };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const savedDataAboutUser = {
      email: this.hero.email,
    };
    const userStr = JSON.stringify(savedDataAboutUser);
    localStorage.setItem('user', userStr);
  }
}