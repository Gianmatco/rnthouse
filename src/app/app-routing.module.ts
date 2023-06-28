import { PrivacyPoliceComponent } from './page/privacy-police/privacy-police.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChisiamonoiComponent } from './page/chisiamonoi/chisiamonoi.component';
import { ContattiComponent } from './page/contatti/contatti.component';
import { FormComponent } from './page/form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, //landing page
  {path: 'contatti', component: ContattiComponent},
  {path: 'form', component: FormComponent},
  {path: 'chisiamonoi', component: ChisiamonoiComponent},
  {path: 'privacypolice', component: PrivacyPoliceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

