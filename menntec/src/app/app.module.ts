import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { DatasecComponent } from './pages/datasec/datasec.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CtaComponent } from './components/cta/cta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig,
} from 'ngx-cookieconsent';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SocialMediaComponent } from './components/social-media/social-media.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'menntec.de',
  },
  position: 'bottom-right',
  theme: 'classic',
  palette: {
    popup: {
      background: '#000000',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#E95814',
      text: '#000000',
      border: 'transparent',
    },
  },
  type: 'info',
  content: {
    message:
      'Diese Seite verwendet Cookies. Durch die weitere Nutzung der Website stimmen Sie der Verwendung zu.',
    dismiss: 'Alles klar',
    deny: 'Refuse cookies',
    link: 'Weitere Infos',
    href: 'https://cookiesandyou.com',
    policy: 'Cookie Policy',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    ImprintComponent,
    DatasecComponent,
    ProductCardComponent,
    QuoteComponent,
    CtaComponent,
    SocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
