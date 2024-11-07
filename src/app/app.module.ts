import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';  // Importa el componente Home
import { EventComponent } from './components/event/event.component';  // Asegúrate de que también lo importes si lo usas

// Configura las rutas del proyecto
const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta para HomeComponent
  { path: 'event', component: EventComponent }  // Ruta para EventComponent
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    EventComponent,
    HomeComponent,
    AppComponent,
    // Carga las rutas
  ],
  providers: [
    provideHttpClient() // Proveedor para HttpClient
  ],
  bootstrap: [AppComponent]  // Establece el componente principal que se inicia al arrancar la aplicación
})
export class AppModule { }
