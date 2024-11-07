import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from "../../services/event/event.service";
import { EventDataService } from "../../services/eventData/event-data.service";

// Interfaces para los datos del evento
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
  styleUrls: ['./event.component.css'],
  standalone: true,
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

  constructor(
    private router: Router,
    private eventService: EventService,
    private eventDataService: EventDataService
  ) { }

  ngOnInit(): void {
    const eventoDetalles = this.eventDataService.getEventDetails();
    console.log('Detalles del evento desde el servicio:', eventoDetalles);

    if (eventoDetalles) {
      this.evento = {
        nombre: eventoDetalles.nombre,
        poster: 'assets/images/' + eventoDetalles.poster || 'assets/placeholder-poster.jpg',
        tipo: eventoDetalles.tipoEvento || 'Sin clasificar',
        ubicacion: {
          departamento: eventoDetalles.direccion?.pais || 'No especificado',
          ciudad: eventoDetalles.direccion?.ciudad || 'No especificada',
          barrio: eventoDetalles.direccion?.barrio || 'No especificado',
          calle: eventoDetalles.direccion?.calle || 'No especificada',
          residencia: eventoDetalles.direccion?.residencia || 'No especificada'
        },
        descripcion: eventoDetalles.descripcion || 'No hay descripción disponible para este evento.',
        distribucionLocalidades: eventoDetalles.imgLocalidades || 'assets/placeholder-layout.jpg'
      };
    } else {
      console.error('No se encontraron detalles del evento');
    }
  }


  comprarEntradas() {
    this.router.navigate(['/shopping']);
  }
}
