import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrls: ['./caso.component.css']
})
export class CasoComponent implements OnInit
{

  id: any;
  caso: any = [];
  titulo:any = [];

  constructor(public http: HttpService, private rutaActiva: ActivatedRoute, private router: Router)
  {
    this.caso['personajes']='';
    this.caso['pistas'] = '';
    this.titulo['caso'] = '';
    this

  }

  ngOnInit(): void
  {
    this.id = this.rutaActiva.snapshot.params.id;
    this.getCaso(this.id);
    this.getTitulo(this.id);
  }

  getCaso(id:any)
  {
    this.http.getCaso(id)
      .subscribe(data =>
      {
        this.caso = data;
        console.log('datos: ' + JSON.stringify(this.caso));
      });
  }

  getTitulo(id:any)
  {
    this.http.getTitulo(id)
      .subscribe(data =>
      {
        this.titulo = data;
        console.log('datos: ' + JSON.stringify(this.titulo));
      });
  }

}
