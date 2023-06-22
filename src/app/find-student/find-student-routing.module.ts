import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindStudentComponent } from './find-student.component';

const routes: Routes = [
  {
    path: '',
    component: FindStudentComponent
  },{
  path:':id/update_student',
    loadChildren:()=>import('../update-student/update-student.module').then(m=>m.UpdateStudentModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindStudentRoutingModule { }
