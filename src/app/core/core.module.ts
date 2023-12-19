import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/http/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { InventoryService } from './services/http/inventory.service';
import { LiaService } from './services/http/lia.service';
import { InterviewService } from './services/http/interview.service';
import { PdfService } from './services/http/pdf.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuizService,
    InventoryService,
    LiaService,
    InterviewService,
    PdfService
  ]
})
export class CoreModule { }
