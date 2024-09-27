import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Array de rutas de archivos CSS
})
export class HomeComponent {
  events = [
    {
      title: 'Concierto de rock',
      date: '2023-06-15',
      city: 'Ciudad de México',
      category: 'Música',
      description: 'Disfruta de una noche llena de rock con la mejor banda de la ciudad.',
      imageUrl: 'assets/images/rock-concert.jpg'
    },
    {
      title: 'Feria de artesanías',
      date: '2023-07-01',
      city: 'Guadalajara',
      category: 'Artesanía',
      description: 'Descubre las mejores piezas artesanales de la región en esta feria única.',
      imageUrl: 'assets/images/crafts-fair.jpg'
    },
    {
      title: 'Festival de cine',
      date: '2023-08-20',
      city: 'Monterrey',
      category: 'Cine',
      description: 'Disfruta de una selección de las mejores películas independientes del momento.',
      imageUrl: 'assets/images/film-festival.jpg'
    },
    {
      title: 'Carrera de autos',
      date: '2023-09-10',
      city: 'Cancún',
      category: 'Deportes',
      description: 'Ven a presenciar la emocionante carrera de autos más rápida del año.',
      imageUrl: 'assets/images/car-race.jpg'
    }
  ];
}
