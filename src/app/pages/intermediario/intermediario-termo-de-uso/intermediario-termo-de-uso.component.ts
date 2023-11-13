import { Component } from '@angular/core';
import { PdfGeneratorService } from 'src/app/core/constants/pdf/termosDeUso';
@Component({
  selector: 'app-intermediario-termo-de-uso',
  templateUrl: './intermediario-termo-de-uso.component.html',
  styleUrls: ['./intermediario-termo-de-uso.component.scss']
})
export class IntermediarioTermoDeUsoComponent {
  description: string = '';
  companyEmail: string = '';
  companyName: string = '';
loading: any;

constructor(private pdfGeneratorService: PdfGeneratorService) {}

  generatePDF() {
    this.pdfGeneratorService.termosDeUso(this.companyName, this.description, this.companyEmail);
  }

}
