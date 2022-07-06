import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { ListFilmsComponent } from './list-films/list-films.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent, data:{page:'home'}},
  {path:'ListFilms', component:ListFilmsComponent, data:{page:'list'}},
  { path: 'film/:id', component: FilmComponent },
  { path: 'Admin', component: AdminComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ListFilmsComponent, AdminComponent]