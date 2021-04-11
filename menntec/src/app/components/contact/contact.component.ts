import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { INQUIRIES_MUTATION } from '../../apollo/queries';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  contactData: any = {};

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  // Submit Contact Form

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    this.submitted = true;

    this.apollo
      .mutate({
        mutation: INQUIRIES_MUTATION,
        variables: {
          firstName: this.contactData.firstName,
          lastName: this.contactData.lastName,
          phone: this.contactData.tel,
          email: this.contactData.eMail,
          message: this.contactData.message,
        },
      })
      // tslint:disable-next-line: deprecation
      .subscribe(
        ({ data }) => {},
        (error) => {
          console.log(error);
        }
      );

    form.reset();
    this.resetSubmit();
  }

  // tslint:disable-next-line: typedef
  resetSubmit() {
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }
}
