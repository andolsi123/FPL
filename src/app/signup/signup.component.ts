import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor(private service: AppService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password,
      name: this.name
    };
    
    this.service.addUser(user).subscribe(data => {
      console.log(data);
    });
    this.route.navigate(['logIn']);
  }

  router() {
    this.route.navigate(['logIn']);
  }

}
