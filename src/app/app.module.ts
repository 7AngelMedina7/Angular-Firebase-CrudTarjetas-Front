import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { AgregarTarjetasComponent } from './components/agregar-tarjetas/agregar-tarjetas.component';
import { ListadoTarjetasComponent } from './components/listado-tarjetas/listado-tarjetas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from "@angular/common/http";
import { InterfazComponent } from './Login/interfaz/interfaz.component';
@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    AgregarTarjetasComponent,
    ListadoTarjetasComponent,
    InterfazComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
