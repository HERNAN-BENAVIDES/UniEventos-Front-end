import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],  // Asegúrate de usar el archivo de estilos correcto
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isLoggedIn = false;  // Aquí gestionamos si el usuario está logueado

  constructor(private router: Router) { }

  // Este método se ejecuta cuando el usuario hace clic en "Iniciar sesión"
  login() {
    this.router.navigate(['/login']);  // Navegar al componente de login
  }

  // Este método se ejecuta cuando el usuario hace clic en "Cerrar sesión"
  logout() {
    this.isLoggedIn = false;  // Actualiza el estado de autenticación
    this.router.navigate(['/login']);  // Navegar a la página de login
  }

  // Este método se ejecuta para cambiar entre modos (puedes personalizarlo según tu aplicación)
  change() {
    this.router.navigate(['/eventBuild']);  // Ejemplo de otra acción (puedes cambiar la ruta según tus necesidades)
  }

  // Este método se ejecuta para cambiar el idioma (puedes personalizarlo según tu aplicación)
  translate() {
    this.router.navigate(['/user']);  // Ejemplo de otra acción (puedes cambiar la ruta según tus necesidades)
  }
}
