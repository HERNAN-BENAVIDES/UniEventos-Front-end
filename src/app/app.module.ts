import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Agrega esta línea

@NgModule({
  declarations: [
    HomeComponent // Declara HomeComponent aquí
  ],
  imports: [
    BrowserModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
