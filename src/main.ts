import { enableProdMode } from '@angular/core';
import {bootstrapApplication, platformBrowser} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Define y exporta las rutas en un archivo separado

// @ts-ignore
import { environment } from './environments/environment';
import {appConfig}  from "./app/app.config";
import {AppModule}  from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)  // Usa appConfig aquí
  .catch(err => console.error(err));

// Inicializa la aplicación con AppComponent y las rutas
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
