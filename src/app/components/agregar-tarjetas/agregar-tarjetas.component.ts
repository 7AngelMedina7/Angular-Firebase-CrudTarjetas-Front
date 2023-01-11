import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ListarTarjetasService } from 'src/app/services/ListarTarjetasService';
import { TarjetaService } from 'src/app/services/tarjeta.service';
@Component({
  selector: 'app-agregar-tarjetas',
  templateUrl: './agregar-tarjetas.component.html',
  styleUrls: ['./agregar-tarjetas.component.css']
})
export class AgregarTarjetasComponent {
  form:FormGroup;
  listTarjetas: any;
  constructor(private fb:FormBuilder, private _cruzarComponents: ListarTarjetasService, private toastr: ToastrService, private _tarjetaService: TarjetaService){
    this.form = this.fb.group({
      titular:['', [Validators.required, Validators.minLength(8)]],
      //Cuando es mas de una validacion se ponen entre corchetes
      numeroTarjeta:['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion:['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv:['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }
  
  agregarTarjeta(){
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this._tarjetaService.saveTarjeta(tarjeta).subscribe({
      //falta obtener tarjeta
      complete:()=> postSucces()
    })

    const postSucces = () =>{
      this.toastr.success(`La tarjeta de ${tarjeta.titular} fue añadida exitosamente`, 'Tarjeta Registrada')
      this.form.reset();
      console.log("test");
      
      this._cruzarComponents.obtenerTarjetas(),
      
      console.log(tarjeta); 
    }
  }
    
}
