import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DofusModule } from './dofus/dofus.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';

@NgModule({ declarations: [
        AppComponent,
        MainComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        RouterModule,
        SharedModule,
        DofusModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
