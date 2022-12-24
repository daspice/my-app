import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { HomeComponent } from "./home/home.component";
import { PopComponent } from "./pop/pop.component";
import { RockComponent } from "./rock/rock.component";
import { BluzComponent } from "./bluz/bluz.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { SignComponent } from "./sign/sign.component";
import { NewComponent } from "./new/new.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TimeComponent } from "./time/time.component";








const routes: Routes = [
    {
        path: 'post', component: PostsComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'pop', component: PopComponent
    },
    {
        path: 'rock', component: RockComponent
    },
    {
        path: 'bluz', component: BluzComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'sign', component: SignComponent,
    },
    {
        path: 'new', component: NewComponent,
    },
    {
        path: '**', component: NotFoundComponent
    },
    {
        path: 'time', component: TimeComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}