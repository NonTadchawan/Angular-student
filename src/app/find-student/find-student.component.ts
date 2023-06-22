import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../type";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent {
  student?:Student;
  id?:number;
  constructor(
    private http:HttpClient,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  findStudent() {
      this.http.get<Student>(`http://localhost:8080/api/student/${this.id}`).subscribe({
          next: student => {
            this.student = student;
            console.log(student)
            console.log('complete');
          },
          error: err => console.log(err)
        }
      );
  }
  edit(student: Student) {
    this.router.navigate([student.id,'update_student'],{relativeTo:this.activatedRoute})
  }
}
