import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasoComponent } from './paginas/caso/caso.component';
import { HomeComponent } from './paginas/home/home/home.component';
import { MapaComponent } from './paginas/mapa/mapa.component';

const routes: Routes = [
  { path : '', pathMatch:  'full', redirectTo:  'home'},
  { path : 'home', component: HomeComponent },
  { path : 'caso/:id', component:CasoComponent},
  { path : 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
