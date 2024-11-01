import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: 'header.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isLoggedIn = false;
  constructor(private router: Router) {}


  login() {
    this.router.navigate(['/event'])
  }
  logout() {
    this.router.navigate(['/login']);
  }
  change() {
    this.router.navigate(['/eventBuild'])
  }
  translate() {
    this.router.navigate(['/user'])
  }
}
