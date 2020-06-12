import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup;

  selectOps = [
    {
      name: "Apple",
      value: "apple"
    },
    {
      name: "Pear",
      value: "pear"
    },
    {
      name: "Peach",
      value: "peach"
    },
    {
      name: "Orange",
      value: "orange"
    },
    {
      name: "Cherry",
      value: "cherry"
    }
  ]

  constructor(
    private formBuilder : FormBuilder,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.registerForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
      island_name: [undefined, Validators.required],
      fruit: ['apple', Validators.required]
    });
  }

  validateForm() {
    if(!this.registerForm.invalid) {
      console.log("correct!");
    }
  }

  goToRoot() {
    this.nav.navigateRoot("/");
  }



}
