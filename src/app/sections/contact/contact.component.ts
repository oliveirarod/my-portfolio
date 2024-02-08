import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  formControls!: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    this.formControls = Object.keys(this.form.controls).filter(
      (controlName) => controlName !== 'message'
    );
  }

createForm() {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    subject: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    message: ['', Validators.required],
  });
}

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log(this.form);
      return;
    }

    console.log(this.form.value);
  }
}
