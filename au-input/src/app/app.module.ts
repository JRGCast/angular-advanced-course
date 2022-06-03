import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { AuFaInputModule } from './lib/au-fa-input/au-fa-input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuFaInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
