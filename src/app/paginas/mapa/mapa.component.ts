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
    console.log('Ancho: ' + window.innerWidth);
    console.log("Alto: " + window.innerHeight);
    this.ir(800, 600);

  }

  posicion(evt: any)
  {
    const { currentTarget: svg, pageX, pageY } = evt;
    console.log(pageX);
    console.log(pageY);
  }

  ir(x: any, y: any)
  {
    // console.log('ir: ' + x + ' - ' + y);
    console.log('Top: ' + (screen.height) );
    console.log('Left: ' + (screen.width));
    var ancho = screen.width;
    var alto = screen.height;
    // console.log('Top: ' + (x + 50));
    // console.log('Left: ' + (y));
    //     window.scroll({
    //   top: 800,
    //   left: 600,
    //   behavior: 'smooth'
    // });
    var coordX = -(240/1.5);
    var coordY = -(121/1.5) ;
    var elemento = document.getElementById('mapaImg');
    if (elemento != null)
    {
      elemento.classList.remove("normal");
      // elemento.classList.add("izquierda");
      elemento.style.top=coordX + "px";
      elemento.style.left=coordY + "px";
    }


    console.log('Top: ' +coordX);
    console.log('Left: ' + coordY);
    // if (elemento != null)
    // {
    //   elemento.classList.add("zoom");
    // }
    // window.scroll({
    //   top: 600,
    //   left: 300,
    //   behavior: 'smooth'
    // });

  }
}
