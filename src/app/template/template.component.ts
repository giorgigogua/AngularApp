import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  isSubmited: boolean = false;

  user = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  }

  onSubmit(form: NgForm) {
    this.isSubmited = true;

  }
}
