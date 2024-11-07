import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event/event.service';
import { Pageable } from '../../interfaces/pageable.model';
import { EventoListarDTO } from '../../dtos/EventoListarDTO.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {EventDataService} from "../../services/eventData/event-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HomeComponent implements OnInit {
  events: Pageable<EventoListarDTO> = { content: [], totalElements: 0, totalPages: 0, size: 0, number: 0 };
  eventsNext: EventoListarDTO[] = [];
  cities: string[] = [];
  categories: string[] = ["DEPORTIVO", "CULTURAL", "MUSICAL", "CINE", "TEATRO", "CIENCIA", "BAILE", "OTRO"];
  today: string | undefined;
  selectedCity: string = 'all';  // Asignar 'all' como valor predeterminado
  selectedCategory: string = 'all';  // Asignar 'all' como valor predeterminado
  noEventsMessage: string | undefined;  // Variable para el mensaje de sin eventos

  constructor(
    private eventService: EventService,
    private router: Router,
    private eventDataService: EventDataService
    ) { }

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
    this.loadCities();
    this.loadEventsNext();  // Cargar los eventos próximos siempre, sin filtros
    this.loadEvents();  // Cargar eventos filtrados solo cuando se apliquen filtros
  }

  // Cuando el usuario cambia la ciudad
  onCityChange(city: string): void {
    this.selectedCity = city;
    this.loadEvents();  // Solo recargar los eventos filtrados
  }

  // Cuando el usuario cambia la categoría
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadEvents();  // Solo recargar los eventos filtrados
  }

  // Cargar los 6 eventos más cercanos (sin filtros)
  loadEventsNext(): void {
    // Asegúrate de que los eventos estén disponibles antes de intentar filtrarlos
    this.eventService.getEvents({}).subscribe(
      (events) => {
        // Filtra y ordena los eventos próximos sin aplicar filtros de ciudad o categoría
        const parseDate = (dateStr: string): Date => {
          const [day, month, year] = dateStr.split('-');
          return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
        };

        // Filtra los eventos futuros
        const upcomingEvents = events.content
          .filter(event => event.fecha && parseDate(event.fecha).getTime() > new Date().getTime())  // Filtra solo eventos futuros
          .sort((a, b) => (a.fecha && b.fecha) ? parseDate(a.fecha).getTime() - parseDate(b.fecha).getTime() : 0);  // Ordena por fecha

        console.log("Eventos próximos:", upcomingEvents);

        // Tomar los primeros 5 eventos
        this.eventsNext = upcomingEvents.slice(0, 5);
      },
      (error) => {
        console.error('Error al obtener eventos próximos', error);
      }
    );
  }

  // Cargar las ciudades desde el servicio
  loadCities(): void {
    this.eventService.getCities().subscribe(
      (cities) => {
        this.cities = [...cities];
      },
      (error) => {
        console.error('Error al obtener las ciudades', error);
      }
    );
  }

  // Cargar los eventos basados en los filtros seleccionados
  loadEvents(): void {
    const filters = {
      nombre: null,
      ciudad: this.selectedCity !== 'all' ? this.selectedCity : null,
      tipoEvento: this.selectedCategory !== 'all' ? this.selectedCategory : null,
      fecha: null
    };

    // Llamar al servicio para obtener los eventos con los filtros aplicados
    this.eventService.getEvents(filters).subscribe(
      (events) => {
        if (events.totalElements === 0) {
          this.noEventsMessage = "No se encontraron eventos relacionados con los filtros de busqueda";
          this.events = { content: [], totalElements: 0, totalPages: 0, size: 0, number: 0 };  // Aseguramos que no se muestren eventos
        } else {
          this.events = events;
          this.noEventsMessage = undefined;  // Si hay eventos, limpiar el mensaje
        }
      },
      (error) => {
        console.error('Error al obtener los eventos', error);
        this.noEventsMessage = 'Hubo un problema al obtener eventos que coinsidan con los filtros de busqueda.';
        this.events = { content: [], totalElements: 0, totalPages: 0, size: 0, number: 0 };  // Aseguramos que no se muestren eventos
      }
    );
  }

  // Manejar el clic en un evento y obtener su ID
  onEventClick(eventId: string | undefined): void {
    console.log('Evento seleccionado con ID:', eventId);
    this.eventService.getEventById(eventId).subscribe(
      (eventDetails) => {
        console.log('Detalles del evento:', eventDetails);
        this.eventDataService.setEventDetails(eventDetails);  // Guarda los detalles en el servicio
        this.router.navigate(['/event']);
      },
      (error) => {
        console.error('Error al obtener detalles del evento:', error);
      }
    );
  }


}
