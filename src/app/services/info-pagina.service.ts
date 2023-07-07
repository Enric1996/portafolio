import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPage = {};
  equipo: any[] = [];
  cargada = false;
  constructor( private http: HttpClient) {
  this.cargaInfo();
  this.cargarEquipo();
  }

  private cargaInfo(){
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) =>{
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://portafolio-52950-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe((resp: any) =>{
      this.cargada = true;
      this.equipo = resp;
      console.log(resp);
    });
  }
}
