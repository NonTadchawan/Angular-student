import { CommonModule } from '@angular/common';

import { RegisterStudentRoutingModule } from './register-student-routing.module';
import { RegisterStudentComponent } from './register-student.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [
    RegisterStudentComponent
  ],
  exports: [
    RegisterStudentComponent
  ],
  imports: [
    CommonModule,
    RegisterStudentRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class RegisterStudentModule { }
