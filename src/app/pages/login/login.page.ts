import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    private nav : NavController,
    private auth : AuthService,
    private alertController : AlertController
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
      let credentials = {username: this.loginForm.get('username').value, password: this.loginForm.get('password').value}
      this.auth.login(credentials).subscribe(
        (res) => {
          if(res) {
            this.nav.navigateForward('/home/passport');
          } else {
            this.presentAlert("Bad Credentials");
          }
        }
      );
      
    } else {
      this.presentAlert("Please enter all fields.");
    }
  
  }

  goToRegister() {
    this.nav.navigateForward("/register");
  }

  async presentAlert(message : string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
