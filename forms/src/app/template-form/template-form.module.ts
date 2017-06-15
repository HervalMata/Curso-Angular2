import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from "app/template-form/template-form.component";
import { FormsModule } from "@angular/forms";
import { FormDebugComponent } from "app/form-debug/form-debug.component";
import { CampoControlErroComponent } from "app/campo-control-erro/campo-control-erro.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ]
})
export class TemplateFormModule { }
