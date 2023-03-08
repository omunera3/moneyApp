import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'form', component: FormComponent},
      { path: '**', redirectTo: 'home'}
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
