import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  sliderContent;
  constructor() { }

  ngOnInit() {
    this.sliderContent = [{ "name": "Hello", "desc": "This is test.", "imgUrl": "images/home/girl1.jpg" },
      { "name": "hello2", "desc": "This is test.", "imgUrl": "images/home/girl2.jpg" },
      { "name": "hello3", "desc": "This is test.", "imgUrl": "images/home/girl3.jpg" }];
  }

}
