import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/quiz.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuizService
  ]
})
export class CoreModule { }
