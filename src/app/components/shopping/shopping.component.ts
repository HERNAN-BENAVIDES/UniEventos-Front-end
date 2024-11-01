import { Component } from '@angular/core';
import {CommonModule, CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

interface Localidad {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule
  ],
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  localidades: Localidad[] = [
    { id: 1, nombre: "VIP", precio: 100, cantidad: 0 },
    { id: 2, nombre: "Platea", precio: 80, cantidad: 0 },
    { id: 3, nombre: "General", precio: 50, cantidad: 0 },
  ];

  actualizarCantidad(id: number, incremento: number): void {
    const localidad = this.localidades.find(loc => loc.id === id);
    if (localidad) {
      localidad.cantidad = Math.max(0, localidad.cantidad + incremento);
    }
  }

  get totalEntradas(): number {
    return this.localidades.reduce((sum, loc) => sum + loc.cantidad, 0);
  }

  get totalPrecio(): number {
    return this.localidades.reduce((sum, loc) => sum + loc.cantidad * loc.precio, 0);
  }

  addToCart(): void {
    console.log('Añadido al carrito:', this.localidades.filter(loc => loc.cantidad > 0));
    // Aquí iría la lógica para añadir al carrito
  }

  buyNow(): void {
    console.log('Compra realizada:', this.localidades.filter(loc => loc.cantidad > 0));
    // Aquí iría la lógica para procesar la compra
  }
}
