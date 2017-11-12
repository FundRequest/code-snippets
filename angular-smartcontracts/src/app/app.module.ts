import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ContractsService} from "./services/contracts/contracts.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
