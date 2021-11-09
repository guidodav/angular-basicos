import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';

//tarea
//crear un nuevo modulo llamado ContadorModule
//no es necesario importar nada. pero hay que hacer declaraciones y exportaciones
@NgModule({
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
