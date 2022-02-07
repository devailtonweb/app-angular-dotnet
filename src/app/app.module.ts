import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil'
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DynamicFormComponent } from './demos/reactive-forms/form-dinamico/dynamic-form.component';
import { DynamicFormQuestionComponent } from './demos/reactive-forms/form-dinamico/dynamic-form-question.component';
import { AppFormComponent } from './demos/reactive-forms/form-dinamico/app-form.component';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
