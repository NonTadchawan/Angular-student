import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../type";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  id?:number
  student:Student={faculty:{}}
constructor(
  private http:HttpClient,
  private activatedRoute: ActivatedRoute,
  private router:Router
) {
    this.activatedRoute.data.subscribe(data => {
      this.student=data['student'];
      this.id = data['student'].id;
    })
}
deleteStudent(){
  this.http.delete(`http://localhost:8080/api/student/${this.id}`).subscribe(data => {
    alert("deleteStudent id: " + this.id+ " success");
    this.router.navigate(['all_student']);
  }, err => {
    console.log(err);
  })

}
}
