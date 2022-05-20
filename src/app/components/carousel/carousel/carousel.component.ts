import { Component, OnInit } from '@angular/core';
import { carouselImages } from 'src/assets/data/carousel-images';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselImages = carouselImages;

  constructor() { }

  ngOnInit(): void {
  }

}
