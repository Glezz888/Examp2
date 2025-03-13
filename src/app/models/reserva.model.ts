import { Timestamp } from "firebase/firestore";

export class Reserva {
  nombre!: string;
  id!: string;
  fecha!: Timestamp;
}
