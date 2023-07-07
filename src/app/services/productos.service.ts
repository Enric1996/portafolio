import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }
   private cargarProductos(){
    this.http.get('https://portafolio-52950-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
    .subscribe((resp: any) =>{
      // this.cargada = true;
      // this.equipo = resp;
      console.log(resp);
      this.cargando = false;
    });
   }
}
