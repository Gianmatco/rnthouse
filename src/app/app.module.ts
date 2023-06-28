import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { ContattiComponent } from './page/contatti/contatti.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './page/form/form.component';
import { ChisiamonoiComponent } from './page/chisiamonoi/chisiamonoi.component';
import { PrivacyPoliceComponent } from './page/privacy-police/privacy-police.component';
import { FooterComponent } from './core/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ContattiComponent,
    FormComponent,
    ChisiamonoiComponent,
    PrivacyPoliceComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
