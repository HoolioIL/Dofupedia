import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DofusModule } from './dofus/dofus.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
    SharedModule,
    DofusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
