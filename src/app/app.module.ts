import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Importa el componente Home si también es standalone

const routes: Routes = [
  { path: '', component: HomeComponent } // Configura la ruta para HomeComponent
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppComponent // Importa AppComponent en lugar de declararlo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
