import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  title;
  description;

  constructor(private route: Router, private service: AppService) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      title: this.title,
      description: this.description
    }
    if (this.description && this.title) {
      this.service.addSubject(data).subscribe(dt => {
        console.log(dt);
      })
      } else {
        alert("missing fields")
      }
    
  }

}
