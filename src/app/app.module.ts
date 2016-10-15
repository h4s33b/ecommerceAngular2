import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    TopNavbarComponent,
    HeaderbarComponent,
    HomeCarouselComponent,
    FooterComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
