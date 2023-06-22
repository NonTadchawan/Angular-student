import {Component} from '@angular/core';
import {Faculty, Student} from "../type";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  student: Student = {faculty: {}}
  faculties?: Faculty[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe(e => {
      console.log(e);
      this.student = e['student'];
    });
    this.http.get<Faculty[]>('http://localhost:8080/api/faculty').subscribe(
      faculty => {
        this.faculties = faculty;
      }
    )

  }

  edit() {
    if (this.student !== undefined) {
      this.http.post<Student>('http://localhost:8080/api/student', this.student).subscribe(
        (student: Student) => {
          alert("update student id:" + `${this.student!.id}` + " successfully")
          this.router.navigate(['all_student'])
        }, error => {
          console.log(error);
        })
    }
  }
}
