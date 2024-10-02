import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // Aquí puedes agregar la lógica para cerrar la sesión si es necesario
    // Por ejemplo, limpiar el almacenamiento local, eliminar tokens, etc.

    // Navegar a la página de login
    this.router.navigate(['/login']);
  }
}
