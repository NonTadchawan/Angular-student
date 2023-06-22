import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {RegisterStudentModule} from "./register-student/register-student.module";
import {FormsModule} from "@angular/forms";
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DeleteStudentComponent,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RegisterStudentModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
