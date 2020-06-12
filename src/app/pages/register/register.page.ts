import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/entities/user';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    private nav : NavController,
    private db : VillagersService,
    private auth : AuthService
  ) { }

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.registerForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
      island_name: [undefined, Validators.required],
      fruit: ['apple', Validators.required],
      villager_name: [undefined, Validators.required],
      villager_birthday : [undefined, Validators.required]
    });
  }

  validateForm() {
    if(!this.registerForm.invalid) {
      let user = this.getUser();
      console.log(user)
      this.db.register(user).subscribe(
        (res) => {
          if(res.status) {
            let credentials = {username: user.username, password: user.password}
            this.auth.login(credentials).subscribe(
              (resp) => {
                if(resp) {
                  this.nav.navigateForward("/home/passport");
                } else {
                  console.log("cant login")
                }
              }
            )
          } else {
            //ALERT
            console.log("Repeated User!")
          }
        }
      );
    } else {
      console.log("invalid form")
    }
  }


  getUser() : User {
    return {
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      island: {
        name: this.registerForm.get('island_name').value,
        fruit: this.registerForm.get('fruit').value
      },
      villager_name: this.registerForm.get('villager_name').value,
      villager_birthday: this.registerForm.get('villager_birthday').value
    }
  }


  goToRoot() {
    this.nav.navigateRoot("/");
  }



}
