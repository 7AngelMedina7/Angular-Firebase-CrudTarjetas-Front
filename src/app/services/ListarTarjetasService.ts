import { Injectable } from '@angular/core';
import { ListadoTarjetasComponent } from '../components/listado-tarjetas/listado-tarjetas.component';
import { TarjetaService } from './tarjeta.service';

@Injectable({
  providedIn: 'root'
})
export class ListarTarjetasService {
  ///error en donde dice test
  constructor(private _tarjetaService: TarjetaService) { }
  listaTarjetas: any[]=[
  ];
  tarjetas:any;
 

  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe({
      next: (n) => this.listaTarjetas = n,
      complete: () => (this.tarjetas = this.listaTarjetas,console.log(this.listaTarjetas)),
    })
  }
}
