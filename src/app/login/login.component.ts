import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  constructor(private service: AppService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      eamil: this.email,
      password: this.password
    };
    if (this.email && this.password) {
      this.service.loginUser(data).subscribe((dt: any) => {
        console.log(dt);
      });
      this.route.navigate(['/chat']);
    } else {
      alert('enter your info');
    }

  }

  router() {
    this.route.navigate(['/signUp']);
  }

}
