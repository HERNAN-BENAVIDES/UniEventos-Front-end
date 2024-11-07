import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {TranslateModule, TranslatePipe} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-password-recover',
  templateUrl: './passwordRecover.component.html',
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    TranslateModule
  ],
  styleUrls: ['./passwordRecover.component.css']
})
export class PasswordRecoverComponent implements OnInit {
  isLeftPanelVisible = true;
  codeForm!: FormGroup;
  credentialsForm!: FormGroup;
  newPasswordForm!: FormGroup;
  codeValidated = false;
  credentialsValidated = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.codeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required]
    });

    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required]
    });

    this.newPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.checkPasswords });
  }

  togglePanel() {
    this.isLeftPanelVisible = !this.isLeftPanelVisible;
    this.resetForms();
  }

  resetForms() {
    this.codeForm.reset();
    this.credentialsForm.reset();
    this.newPasswordForm.reset();
    this.codeValidated = false;
    this.credentialsValidated = false;
  }

  sendCode() {
    if (this.codeForm.get('email')!.valid) {  // Usa '!' para indicar que no es null
      console.log('Código enviado a:', this.codeForm.get('email')!.value);
    }
  }

  validateCode() {
    if (this.codeForm.valid) {
      console.log('Validando código:', this.codeForm.get('code')!.value);  // Usa '!' aquí también
      this.codeValidated = true;
    }
  }

  validateCredentials() {
    if (this.credentialsForm.valid) {
      console.log('Validando credenciales para:', this.credentialsForm.get('email')!.value);  // Usa '!' aquí también
      this.credentialsValidated = true;
    }
  }

  changePassword() {
    if (this.newPasswordForm.valid) {
      console.log('Cambiando contraseña');
      this.resetForms();
    }
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('newPassword')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
