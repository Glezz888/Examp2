import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { LibroComponent } from './pages/libro/libro.component';
import { reservaComponent } from './pages/reserva/reserva.component';
import { AsercaDeComponent } from './pages/aserca-de/aserca-de.component';

export const routes: Routes = [
    { path: 'Productos', component: ProductoComponent },
    { path: 'Libros', component: LibroComponent },
    { path: 'Reservas', component: reservaComponent },
    { path: 'about', component: AsercaDeComponent },
    { path: '**', redirectTo: 'about' },
];
