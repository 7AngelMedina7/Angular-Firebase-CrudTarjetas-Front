import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ListarTarjetasService } from "../../services/ListarTarjetasService";
@Component({
  selector: 'app-listado-tarjetas',
  templateUrl: './listado-tarjetas.component.html',
  styleUrls: ['./listado-tarjetas.component.css']
})
export class ListadoTarjetasComponent {
  ngOnInit():void{
    this.obtenerTarjetas();
    console.log("a");
    console.log(this._lista.listaTarjetas);
  }
  tarjetass: any;
  constructor(public _lista: ListarTarjetasService, private toastr: ToastrService, private _tarjetaService: TarjetaService ){
  }

  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe({
      next: (n) => this._lista.listaTarjetas = n,
      complete: () => (this.tarjetass = this._lista.listaTarjetas,(this._lista.obtenerTarjetas)),
    })
  }
  eliminarTarjeta(index:number){
    console.log(index);
    this._tarjetaService.deleteTarjeta(index).subscribe(
      {next: ()=> this.toastr.error('Tarjeta eliminada con exitro', 'Tarjeta Eliminada'),
      complete:()=>  this._lista.obtenerTarjetas()
    });
  }

}
