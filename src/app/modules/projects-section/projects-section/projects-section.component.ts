import { Component, OnInit } from '@angular/core';
import { projects } from 'src/assets/data/projects';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
