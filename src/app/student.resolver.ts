import {ResolveFn} from '@angular/router';
import {Student} from "./type";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export const studentResolver: ResolveFn<Student> = (route, state) => {
  let httpClient = inject(HttpClient);
  let id = route.paramMap.get('id');
  return httpClient.get<Student>(`http://localhost:8080/api/student/${id}`);
};


