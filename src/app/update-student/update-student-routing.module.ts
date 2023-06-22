import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student.component';
import {studentResolver} from "../student.resolver";

const routes: Routes = [{ path: '', component: UpdateStudentComponent,
  data:{
    title:'update student',
  },
  resolve: {
    student:studentResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateStudentRoutingModule { }
