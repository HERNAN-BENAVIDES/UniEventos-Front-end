import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import{LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRightPanelActive = false;

  constructor(
    private router: Router,
    private loginService: LoginService) { }


  togglePanel(event: Event): void {
    event.preventDefault();
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
