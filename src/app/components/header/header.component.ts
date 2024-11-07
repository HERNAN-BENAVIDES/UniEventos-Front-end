import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {routes} from "../../app.routes";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false; // Mantén tu lógica actual de autenticación
  currentLang: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    // Inicializar el idioma actual
    this.currentLang = this.translate.currentLang || 'es';
  }

  switchLanguage() {
    // Cambiar entre español e inglés
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
  }

  // Mantén tus otros métodos
  change() {
    // Tu lógica para el modo oscuro
  }

  login() {
    this.router.navigate(['/login'])
  }

  logout() {
    // Tu lógica de logout
  }

  eventBuilder() {
    this.router.navigate(['/eventBuild'])
  }

  usuario() {
    this.router.navigate(['/user'])
  }
}
