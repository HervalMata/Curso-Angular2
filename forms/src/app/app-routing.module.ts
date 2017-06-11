import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from "app/template-form/template-form.component";
import { DataFormComponent } from "app/data-form/data-form.component";

const routes: Routes = [
  {
    path: 'templateForm',
    component: TemplateFormComponent,
    children: []
  },
  {
    path: 'dataForm',
    component: DataFormComponent,
    children: []
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'templateForm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
