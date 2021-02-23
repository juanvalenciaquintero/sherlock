import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {

  }

  posicion(evt: any)
  {
    const { currentTarget: svg, pageX, pageY } = evt;
  }

  ir(y: any, x: any)
  {
    var centroX = screen.height / 2;
    var centroY = screen.width / 2;
    var coordX = centroX - x - 50;
    var coordY = centroY - y;
    var elemento = document.getElementById('mapaImg');
    if (elemento != null)
    {
      elemento.classList.remove("normal");
      elemento.style.top = coordX + "px";
      elemento.style.left = coordY + "px";
    }

  }
}
