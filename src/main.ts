import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Define y exporta las rutas en un archivo separado

// @ts-ignore
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Inicializa la aplicación con AppComponent y las rutas
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
