import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { ReferencesComponent } from './references/references.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InstrumentslistComponent } from './instrumentslist/instrumentslist.component';
import { PianoComponent } from './piano/piano.component';
import { GuitarComponent } from './guitar/guitar.component';
import { ViolinComponent } from './violin/violin.component';
import { LogoComponent } from './logo/logo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramsComponent,
    ReferencesComponent,
    AboutusComponent,
    InstrumentslistComponent,
    PianoComponent,
    GuitarComponent,
    ViolinComponent,
    LogoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
