import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { personality } from 'src/assets/data/personality';
import { Personality } from 'src/models/personality';

@Component({
  selector: 'app-personality-modal',
  templateUrl: './personality-modal.component.html',
  styleUrls: ['./personality-modal.component.css']
})
export class PersonalityModalComponent implements OnInit {

  personality: Personality;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

}
