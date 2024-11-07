import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRightPanelActive = false;

  togglePanel(event: Event) {
    event.preventDefault();
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
