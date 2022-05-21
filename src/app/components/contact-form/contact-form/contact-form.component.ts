import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  invalid: boolean = false;

  @Output() submittedForm = new EventEmitter();

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.contactForm.invalid) {
      this.invalid = true
      return;
    }

    this.http.post('https://formspree.io/mknnrkbq', JSON.stringify(this.contactForm)).subscribe(data => {
      console.log(data);
    })

    this.invalid = false;
    this.submittedForm.emit(true);    
  }
}
