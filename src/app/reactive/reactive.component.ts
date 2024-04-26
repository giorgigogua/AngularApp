import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})


export class ReactiveComponent {
  userForm: FormGroup;

  isSubmit = false

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      isComplete: new FormControl(false)
    })
  }

  onSubmit() {
    const formValid = this.userForm.valid

    this.isSubmit = true;
  }
}
