import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  contactData: any = {};

  constructor() {}

  ngOnInit(): void {}

  // Submit Contact Form

  onSubmit() {
    this.submitted = true;
    console.log(this.contactData);
  }
}
