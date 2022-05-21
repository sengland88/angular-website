import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityModalComponent } from './personality-modal.component';

describe('PersonalityModalComponent', () => {
  let component: PersonalityModalComponent;
  let fixture: ComponentFixture<PersonalityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
