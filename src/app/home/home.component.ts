import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="container text-center">
		This is Home page
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	</div>
  `
})
export class HomeComponent { }