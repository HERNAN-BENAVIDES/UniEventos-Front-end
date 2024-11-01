import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EventBuildComponent } from './components/eventBuild/eventBuild.component';
import {EventComponent} from "./components/event/event.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {UserComponent} from "./components/user/user.component";
import {PasswordRecoverComponent} from "./components/passwordRecover/passwordRecover.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'eventBuild', component: EventBuildComponent },
  { path: 'event', component: EventComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'user', component: UserComponent },
  { path: 'passwordRecover', component: PasswordRecoverComponent },
];
