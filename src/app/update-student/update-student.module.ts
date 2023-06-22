import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateStudentRoutingModule } from './update-student-routing.module';
import { UpdateStudentComponent } from './update-student.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    UpdateStudentRoutingModule,
    FormsModule
  ]
})
export class UpdateStudentModule { }
