import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/http/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { SectorService } from './services/http/sector.service';
import { InventoryService } from './services/http/inventory.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuizService,
    SectorService,
    InventoryService
  ]
})
export class CoreModule { }
