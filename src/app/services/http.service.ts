import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{


  private url = 'http://sherlock.valquinter.com/api.php';

  constructor(public http: HttpClient)
  {
    console.log('Entrado en servicio');
  }

  getCasos()
  {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set("Access-Control-Allow-Origin", '*');
    const params = new HttpParams().set('opcion', 'casos');
    return this.http.get(this.url, { headers, params });
  }

  getCaso(id: any)
  {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set("Access-Control-Allow-Origin", '*');
    const params = new HttpParams().set('opcion', 'caso').set('id', id);
    return this.http.get(this.url, { headers, params });
  }

    getTitulo(id: any)
  {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set("Access-Control-Allow-Origin", '*');
    const params = new HttpParams().set('opcion', 'titulo').set('id', id);
    return this.http.get(this.url, { headers, params });
  }
}
