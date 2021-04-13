import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GuitarComponent } from './guitar/guitar.component';
import { HomeComponent } from './home/home.component';
import { InstrumentslistComponent } from './instrumentslist/instrumentslist.component';
import { LogoComponent } from './logo/logo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PianoComponent } from './piano/piano.component';
import { ProgramsComponent } from './programs/programs.component';
import { ReferencesComponent } from './references/references.component';
import { ViolinComponent } from './violin/violin.component';
const routes: Routes = [
  {path:"logo",component:LogoComponent},
  {path:"home",component:HomeComponent},
  {path:"programs",component:ProgramsComponent},
  {path:"references",component:ReferencesComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"instrumentslist",component:InstrumentslistComponent, children:[
    {path:"piano",component:PianoComponent},
    {path:"guitar",component:GuitarComponent},
    {path:"violin",component:ViolinComponent},
  ]},

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
