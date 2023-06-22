import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeleteStudentComponent} from "./delete-student.component";
import {studentResolver} from "../student.resolver";
import {AllStudentComponent} from "../all-student/all-student.component";

const routes: Routes = [
  {
    path:'',
    component:DeleteStudentComponent,
    data:{
      title:'Delete Student'
    },
    resolve:{
      student:studentResolver
    }
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteStudentRoutingModule { }
