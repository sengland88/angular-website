import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  contact: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  openForm(): void {
    this.contact = true
  }

  showContactMe(): void {
    this.contact = false;
  }
}
