import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

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

  togglePanel(event: Event): void {
    event.preventDefault();
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
