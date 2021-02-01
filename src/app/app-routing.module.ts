import { MapaComponent } from './paginas/mapa/mapa.component';
import { HomeComponent } from './paginas/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:  '', pathMatch:  'full', redirectTo:  'home'},
  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
