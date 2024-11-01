import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

interface Usuario {
  nombres: string;
  primerApellido: string;
  segundoApellido: string;
  cedula: string;
  correo: string;
  telefono: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuario: Usuario = {
    nombres: 'Juan',
    primerApellido: 'Pérez',
    segundoApellido: 'García',
    cedula: '1234567890',
    correo: 'juan.perez@ejemplo.com',
    telefono: '0987654321'
  };

  modoEdicion: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEditar(): void {
    this.modoEdicion = true;
  }

  onSubmit(): void {
    // Aquí iría la lógica para guardar los cambios en el servidor
    console.log('Guardando cambios:', this.usuario);
    this.modoEdicion = false;
    // Mostrar un mensaje de éxito (puedes usar un servicio de notificaciones aquí)
    alert('Perfil actualizado: Los cambios en tu perfil han sido guardados.');
  }

  onCambiarContrasena(): void {
    // Aquí iría la lógica para navegar a la página de cambio de contraseña
    console.log('Redirigiendo a la página de cambio de contraseña...');
    // Mostrar un mensaje (puedes usar un servicio de notificaciones aquí)
    alert('Cambiar contraseña: Redirigiendo a la página de cambio de contraseña...');
    this.router.navigate(['/passwordRecover'])

  }
}
