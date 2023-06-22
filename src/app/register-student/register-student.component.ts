import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Faculty, Student} from "../type";


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent{
  student:Student={faculty:{}}
  faculties?:Faculty[];
  constructor(private http:HttpClient) {
    this.http = http;
    this.http.get<Faculty[]>('http://localhost:8080/api/faculty').subscribe(
      faculty=>{
        this.faculties=faculty;
      })
  }
  registerStudent(){
    this.http.post("http://localhost:8080/api/student",this.student).subscribe({
      next:data=>{
        alert("save student successfully");
        console.log("save student successfully");
        this.reset()
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  reset() {
    this.student={faculty:{}}
    console.log("reset")
  }
}
