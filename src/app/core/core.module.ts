import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { SectorService } from './services/sector.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuizService,
    SectorService
  ]
})
export class CoreModule { }
