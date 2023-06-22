import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindStudentRoutingModule } from './find-student-routing.module';
import { FindStudentComponent } from './find-student.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FindStudentComponent
  ],
  imports: [
    CommonModule,
    FindStudentRoutingModule,
    FormsModule,
  ]
})
export class FindStudentModule { }
