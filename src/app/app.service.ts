import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) {  }

  addUser(body) {
    return this.http.post(`http://localhost:3000/users/addUser`, body);
  }

  loginUser(body) {
    return this.http.post(`http://localhost:3000/users/login`, body);
  }

  allSubjects() {
    return this.http.get('http://localhost:3000/subjects/getAllSubjects');
  }

  addSubject(body) {
    return this.http.post('http://localhost:3000/subjects/getAllSubjects', body);
  }

  addVoteYes(id) {
    return this.http.post(`http://localhost:3000/subjects/addVoteYes/${id}`, {});
  }

  addVoteNo(id) {
    return this.http.post(`http://localhost:3000/subjects/addVoteNo/${id}`, {});
  }

}
