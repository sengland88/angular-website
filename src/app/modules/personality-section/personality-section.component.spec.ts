import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitySectionComponent } from './personality-section.component';

describe('PersonalitySectionComponent', () => {
  let component: PersonalitySectionComponent;
  let fixture: ComponentFixture<PersonalitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
