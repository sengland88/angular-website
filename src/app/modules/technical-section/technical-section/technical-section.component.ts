import { Component, OnInit } from '@angular/core';
import { technicalSKills } from 'src/assets/data/technical-skills';

@Component({
  selector: 'app-technical-section',
  templateUrl: './technical-section.component.html',
  styleUrls: ['./technical-section.component.css']
})
export class TechnicalSectionComponent implements OnInit {

  skills = technicalSKills;

  constructor() { }

  ngOnInit(): void {
  }

}
