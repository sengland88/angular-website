import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PersonalityModalComponent } from 'src/app/components/modals/personality-modal/personality-modal/personality-modal.component';
import { personality } from 'src/assets/data/personality';
import { Personality } from 'src/models/personality';

@Component({
  selector: 'app-personality-section',
  templateUrl: './personality-section.component.html',
  styleUrls: ['./personality-section.component.css']
})
export class PersonalitySectionComponent implements OnInit {

  personalities = personality;

  modalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false
  }

  constructor(private activeModal: NgbModal) { }

  ngOnInit(): void {
  }

  openPersonalityModal(personality: Personality): void {
    const modalRef = this.activeModal.open(PersonalityModalComponent, this.modalOptions);

    modalRef.componentInstance.personality = personality;
  }

}
