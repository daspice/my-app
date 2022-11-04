import { Component, OnInit } from '@angular/core';

export interface UserLoginDto {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLoginDto = { email: '', password: '' };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    const sevedDataAboutUser = {
      email: this.user.email,
    };
    const userStr = JSON.stringify(sevedDataAboutUser);
    localStorage.setItem('user', userStr);
    
  }

}
