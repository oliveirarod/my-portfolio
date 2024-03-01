import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { slideUpAnimation } from 'src/app/utils/animations/slide-up.animation';
import { Sections } from 'src/app/utils/enums/sections';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('contactSection') contactSection!: ElementRef;

  form!: FormGroup;
  formControls!: string[];

  slideUpAnimation: AnimationProperties = slideUpAnimation;

  constructor(
    private fb: FormBuilder,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.formControls = Object.keys(this.form.controls).filter(
      (controlName) => controlName !== 'message'
    );
  }

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.CONTACT,
      this.contactSection
    );
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
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
