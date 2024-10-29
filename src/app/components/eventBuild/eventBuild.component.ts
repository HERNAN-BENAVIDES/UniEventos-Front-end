import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Localidad {
  nombre: string;
  precio: number;
}

interface Evento {
  nombre: string;
  tipo: string;
  departamento: string;
  ciudad: string;
  barrio: string;
  calle: string;
  residencia: string;
  descripcion: string;
  poster: File | null;
  distribucionLocalidades: File | null;
  localidades: Localidad[];
}

@Component({
  selector: 'app-eventBuild',
  templateUrl: './eventBuild.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./eventBuild.component.css']
})
export class EventBuildComponent {
  evento: Evento = {
    nombre: '',
    tipo: '',
    departamento: '',
    ciudad: '',
    barrio: '',
    calle: '',
    residencia: '',
    descripcion: '',
    poster: null,
    distribucionLocalidades: null,
    localidades: []
  };

  constructor(private router: Router) {}

  addLocalidad() {
    this.evento.localidades.push({ nombre: '', precio: 0 });
  }

  removeLocalidad(index: number) {
    this.evento.localidades.splice(index, 1);
  }

  onFileChange(event: Event, field: 'poster' | 'distribucionLocalidades') {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    this.evento[field] = file;
  }

  crearEvento() {
    console.log('Evento a crear:', this.evento);
    // Aquí iría la lógica para enviar los datos del evento al servidor
    // Por ejemplo, usando un servicio para hacer una petición HTTP

    // Después de crear el evento, podrías navegar a otra página
    // this.router.navigate(['/eventos']);
  }
}
