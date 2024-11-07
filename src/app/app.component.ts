import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLang: string;
  title: string = 'UniEventos-Front-end';

  constructor(private translate: TranslateService) {
    // Idiomas soportados
    translate.addLangs(['es', 'en']);
    // Idioma por defecto
    translate.setDefaultLang('es');

    // Obtener el idioma del navegador
    const browserLang = translate.getBrowserLang();
    this.currentLang = browserLang?.match(/es|en/) ? browserLang : 'es';
    translate.use(this.currentLang);
  }

  ngOnInit() {
  }

  // Método para cambiar el idioma
  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
