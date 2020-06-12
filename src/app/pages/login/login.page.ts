import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private db : VillagersService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.loginForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }

  validateForm() {
    if(!this.loginForm.invalid) {
      //dbLogin
      this.nav.navigateForward('/home/passport');
    } else {
      console.log("Llenar campos!");
    }
  
  }

  goToRegister() {
    this.nav.navigateForward("/register");
  }

}
