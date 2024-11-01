import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Ubicacion {
  departamento: string;
  ciudad: string;
  barrio: string;
  calle: string;
  residencia: string;
}

interface Evento {
  nombre: string;
  poster: string;
  tipo: string;
  ubicacion: Ubicacion;
  descripcion: string;
  distribucionLocalidades: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  standalone: true,
  styleUrls: ['./event.component.css'],
  imports: [CommonModule]
})
export class EventComponent implements OnInit {

  evento: Evento = {
    nombre: 'Evento sin nombre',
    poster: 'assets/placeholder-poster.jpg',
    tipo: 'Sin clasificar',
    ubicacion: {
      departamento: 'No especificado',
      ciudad: 'No especificada',
      barrio: 'No especificado',
      calle: 'No especificada',
      residencia: 'No especificada'
    },
    descripcion: 'No hay descripción disponible para este evento.',
    distribucionLocalidades: 'assets/placeholder-layout.jpg'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí podrías cargar los datos del evento desde un servicio
    // Por ahora, usaremos datos de ejemplo
    this.evento = {
      nombre: "Concierto de Rock",
      poster: "assets/images/Concierto de Rock.png",
      tipo: "Música",
      ubicacion: {
        departamento: "Cundinamarca",
        ciudad: "Bogotá",
        barrio: "Chapinero",
        calle: "Calle 53",
        residencia: "#10-60"
      },
      descripcion: "Un increíble concierto de rock con las mejores bandas del momento.",
      distribucionLocalidades: "assets/images/Distribución de Localidades Movistar Arena.png"
    };
  }

  comprarEntradas() {
    this.router.navigate(['/shopping'])
  }
}
