import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserva } from '../../models/reserva.model';
import { reservaservice } from '../../services/reserva.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class reservaComponent {
  // Propiedades
  reservas: any = [];
  reserva = new Reserva();

  // Constructor
  constructor(private reservaservice: reservaservice) {
    this.getreservas();
  }

  // Método para obtener todas las reservas
  async getreservas(): Promise<void> {
    this.reservas = await firstValueFrom(this.reservaservice.getreserva());
  }

  // Método para agregar una reserva
  async insertarReserva() {
    await this.reservaservice.agregarReserva(this.reserva);
    await this.getreservas();
    this.reserva = new Reserva();
  }

  // Método para seleccionar una reserva de la tabla
  selectreserva(reservaSeleccionada: Reserva) {
    this.reserva = { ...reservaSeleccionada };
  }

  // Método para modificar una reserva
  async updatereserva() {
    await this.reservaservice.modificarReserva(this.reserva);
    await this.getreservas();
    this.reserva = new Reserva();
  }

  // Método para eliminar una reserva
  async deletereserva() {
    await this.reservaservice.eliminarReserva(this.reserva);
    await this.getreservas();
    this.reserva = new Reserva();
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.reserva = new Reserva();
  }
}
