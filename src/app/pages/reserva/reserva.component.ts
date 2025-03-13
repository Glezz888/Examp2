import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserva } from '../../models/reserva.model';
import { reservaservice } from '../../services/reserva.service';
import { firstValueFrom } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class reservaComponent {
  //Propiedades
  reservas: any;
  reserva = new Reserva();

  //Constructor
  constructor(private reservaservice: reservaservice) {
    this.getreservas();
  }

   //Metodo que hace la peticion al sercice para obtener los libros
   async getreservas(): Promise<void> {
    this.reservas = await firstValueFrom(this.reservaservice.getreserva());
  }

  //Metodo para agregar un libro desde el formulario
  insertarReserva(){
    this.reservaservice.agregarReserva(this.reserva);
    this.getreservas();
    this.reserva = new Reserva();
  }

  //Metodo para seleccionar un libro de la tabla
  selectreserva(reservaSeleccionado: Reserva){
    this.reserva = reservaSeleccionado;
  }


  //Metodo para modificar un libro
  updatereserva(){
    this.reservaservice.modificarReserva(this.reserva);
    this.getreservas();
    this.reserva = new Reserva();
  }
  //Metodo para eliminar un libro
   deletereserva(){
    this.reservaservice.eliminarReserva(this.reserva);
    this.getreservas();
    this.reserva = new Reserva();
  }

  //Metodo para limpiar formulario
  limpiarFormulario(){
    this.reserva = new Reserva();
  }
}
