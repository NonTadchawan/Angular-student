import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllStudentComponent} from "./all-student.component";

const routes: Routes = [{path:'',component:AllStudentComponent},
  {
    path: ':id/update_student',
    loadChildren:()=>import('../update-student/update-student.module').then(m=>m.UpdateStudentModule)
  },
  {
    path:':id/delete_student',
    loadChildren:()=>import('../delete-student/delete-student.module').then(m=>m.DeleteStudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllStudentRoutingModule { }
