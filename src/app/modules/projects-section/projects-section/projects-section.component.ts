import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from 'src/app/components/modals/project-modal/project-modal/project-modal.component';
import { projects } from 'src/assets/data/projects';
import { Project } from 'src/models/projects';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  projects = projects;

  modalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false
  }

  constructor(private activeModal: NgbModal) { }

  ngOnInit(): void {
  }

  openProjectModal(project: Project): void {
    const modalRef = this.activeModal.open(ProjectModalComponent, this.modalOptions);

    modalRef.componentInstance.project = project
  }
}
