import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SessionsService } from 'src/app/services/auth/sessions.service';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private service: SessionsService
  ) {}
  //--------------Form-------------------
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required], //, Validators.email
      password: ['', Validators.required],
      remember: [false],
    });
  }

  validCredentials: boolean = true;

  public login(): void {
    this.service
      .login(this.myForm.value)
      //.pipe(filter((result) => result === true))
      //.subscribe(() => this.router.navigate(['/']));
      .subscribe(
        //(error) => console.log('login', error),
        (error) => (this.validCredentials = error),
        () => console.log(this.validCredentials),
        () => this.router.navigate(['/'])
      );
    console.log('validCredentials', this.validCredentials);
  }

  //validate
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  public onChange(event: Event): void {
    this.validCredentials = true;
  }

  //----------------Modal----------------
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  copyToClipboard(): void {
    const emailInput = document.getElementById(
      'email-input'
    ) as HTMLInputElement;
    emailInput.select();
    document.execCommand('copy');
  }
  //--------------Input-------------------
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
