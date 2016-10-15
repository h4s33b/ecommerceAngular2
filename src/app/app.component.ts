import { Component } from '@angular/core';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
