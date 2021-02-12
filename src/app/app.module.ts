import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResearchComponent } from './components/research/research.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleAdViewComponent } from './views/single-ad-view/single-ad-view.component';
import { DisplayAdsComponent } from './components/display-ads/display-ads.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResearchComponent,
    AuthViewComponent,
    ProfilViewComponent,
    ErrorViewComponent,
    SingleAdViewComponent,
    DisplayAdsComponent,
    HomepageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
