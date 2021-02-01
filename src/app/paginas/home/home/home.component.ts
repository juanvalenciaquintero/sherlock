import { HttpService } from './../../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  casos: any;
  constructor(public http: HttpService) { }

  ngOnInit(): void
    {
      console.log('Home');
      this.getCasos();
    }

    getCasos()
    {
      this.http.getCasos()
        .subscribe(data =>
        {
          this.casos = data;
          console.log('datos: ' + JSON.stringify(this.casos));
      });
  }

}
