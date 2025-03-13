import { Injectable, inject } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Reservaservice {

  private db: Firestore = inject(Firestore);

  constructor() { }

  // Método para obtener todos los documentos de la colección
  getReservas() {
    const reservasCollection = collection(this.db, 'reservas'); // Cambio 'reserva' -> 'reservas'
    return collectionData(reservasCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar un documento a la colección
  agregarReserva(reserva: Reserva) {
    const reservasCollection = collection(this.db, 'reservas');
    const reservaData = {
      numero_de_reserva: reserva.numero_de_reserva,
      fecha: reserva.fecha,
      nombre: reserva.nombre
    };
    addDoc(reservasCollection, reservaData);
  }

  // Método para modificar un documento de la colección
  modificarReserva(reserva: Reserva) {
    const documentRef = doc(this.db, 'reservas', reserva.nombre); // Cambio 'reserva' -> 'reservas'
    updateDoc(documentRef, {
      fecha: reserva.fecha,
      numero_de_reserva: reserva.numero_de_reserva,
      nombre: reserva.nombre
    });
  }

  // Método para eliminar un documento de la colección
  eliminarReserva(reserva: Reserva) {
    const documentRef = doc(this.db, 'reservas', reserva.nombre); // Cambio 'reserva' -> 'reservas'
    deleteDoc(documentRef);
  }
}
