import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demos6',
  templateUrl: './demos6.component.html',
  styleUrls: ['./demos6.component.css']
})
export class Demos6Component implements OnInit {
  rfStudent: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfStudent = this.formBuilder.group({
      name: ['No name', [
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      point: [0],
      address: [],
      password: [],
      confirmPassword: []
    });
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }
}
