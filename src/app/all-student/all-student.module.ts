import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllStudentRoutingModule } from './all-student-routing.module';
import {AllStudentComponent} from "./all-student.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AllStudentComponent
  ],
  imports: [
    CommonModule,
    AllStudentRoutingModule,
    FormsModule
  ]
})
export class AllStudentModule { }
