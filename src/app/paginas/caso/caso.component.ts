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

  constructor(public http: HttpService, private rutaActiva: ActivatedRoute, private router: Router)
  {
    this.caso['personajes']='';
    this.caso['pistas'] = '';

  }

  ngOnInit(): void
  {
    this.getCaso();
  }

  getCaso()
  {
    this.id = this.rutaActiva.snapshot.params.id;
    this.http.getCaso(this.id)
      .subscribe(data =>
      {
        this.caso = data;
        console.log('datos: ' + JSON.stringify(this.caso));
      });
  }

}
