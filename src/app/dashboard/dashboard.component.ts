import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  subjects;

  constructor(private route: Router, private service: AppService) { }

  ngOnInit() {
    this.service.allSubjects().subscribe(data => {
      this.subjects = data;
    })
  }

  redirect() {
    this.route.navigate(['/add']);
  }

  addNo(id) {
    this.service.addVoteNo(id).subscribe(dt => {
      console.log(dt);
    })
  }

  addYes(id) {
    this.service.addVoteYes(id).subscribe(dt => {
      console.log(dt);
    })
  }
}
