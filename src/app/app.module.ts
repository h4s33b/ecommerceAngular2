import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { ItemService } from './item-service/item.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
  // { path: 'hero/:id', component: HeroDetailComponent },
  // { path: 'crisis-center', component: CrisisListComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: {
  //     title: 'Heroes List'
  //   }
  // },
  // { path: '', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    TopNavbarComponent,
    HeaderbarComponent,
    HomeCarouselComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
