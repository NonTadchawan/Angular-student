import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register-student/register-student.module').then(m => m.RegisterStudentModule)
  },
  {
    path:'all_student',
    loadChildren: () => import('./all-student/all-student.module').then(m => m.AllStudentModule)
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
