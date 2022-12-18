import { Component, OnInit } from '@angular/core';

export interface HeroRegisterDto {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  birthDate: string;
  gender: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hero: HeroRegisterDto = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    gender: '',
  };
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.hero);
  }
}