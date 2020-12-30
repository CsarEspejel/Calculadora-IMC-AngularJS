import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [PersonaComponent]
})
export class AppModule { }
