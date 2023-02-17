import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DisplayComponent } from './components/display.component';
import { HttpClientModule} from "@angular/common/http";
import {BggService} from "./bgg.service";

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
