import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
