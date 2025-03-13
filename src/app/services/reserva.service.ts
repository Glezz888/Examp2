import { Injectable, inject } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class reservaservice {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //Metodo para obtener todos los documentos de la coleccion
  getreserva() {
    const reservasCollection = collection(this.db, 'reservas');
    return collectionData((reservasCollection), { idField: 'id' }).pipe(first());
  }

  //Metodo para agregar un documento a la coleccion
  agregarReserva(reserva: Reserva) {
    const reservasCollection = collection(this.db, 'reservas');
    const reservaData = {
      id: reserva.id,
      fecha: reserva.fecha,
      nombre: reserva.nombre
    };
    addDoc(reservasCollection, reservaData);
  }

  //Metodo para modificar un documento de la coleccion
  modificarReserva(reserva: Reserva) {
    const documentRef = doc(this.db, 'reservas', reserva.id);
    updateDoc(documentRef, {
      fecha: reserva.fecha,
      id: reserva.id,
      nombre: reserva.nombre
    })
  }
   //Metodo para eliminar un documento de la coleccion
  eliminarReserva(reserva: Reserva) {
    const documentRef = doc(this.db, 'reservas', reserva.id); // Cambio 'reserva' -> 'reservas'
    deleteDoc(documentRef);
  }
}
