import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (passWord && confirmPassword && passWord.touched && passWord.value !== confirmPassword.value) {
    return {reConfirmPass: true};
  } else {
    return null;
  }
};

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  rfRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfRegister = this.formBuilder.group({
      email: ['abc@gmail.com', [Validators.required, Validators.email]],
      password: [],
      confirmPassword: [],
      country: ['1', [Validators.required]],
      age: ['19', [Validators.required, Validators.min(18)]],
      gender: ['1', [Validators.required]],
      phone: ['+84123456789', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]]
    }, {validators: reConfirmPass});
  }

  onSubmit() {
    if (this.rfRegister.valid) {
      console.log(this.rfRegister.value);
    }
  }
}
