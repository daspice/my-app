import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PopComponent } from './pop/pop.component';
import { RockComponent } from './rock/rock.component';
import { BluzComponent } from './bluz/bluz.component';
import { TimeComponent } from './time/time.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent,
    PopComponent,
    RockComponent,
    BluzComponent,
    TimeComponent,
    NotFoundComponent,
    NewComponent,
    LoginComponent,
    SignComponent,
    AboutComponent,
    HeroComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
