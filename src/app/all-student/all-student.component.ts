import {Component, OnInit} from '@angular/core';
import {Student} from "../type";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent {
  students?: Student[];
  student?: Student;
  id?: number;

  constructor(private http: HttpClient,
              public activatedRouter: ActivatedRoute) {

  }

  findAllStudent() {
    this.http.get<Student[]>("http://localhost:8080/api/student").subscribe({
        next: allStudent => {
          this.students = allStudent
          console.log('complete')
        },
        error: err => console.log(err)
      }
    );
  }

  findStudent() {
    if (this.id !== undefined) {
      this.http.get<Student>(`http://localhost:8080/api/student/${this.id}`).subscribe({
          next: student => {
            this.student = student
            console.log(student)
          },
          error: err => console.log(err)
        }
      );
    }
  }
}
