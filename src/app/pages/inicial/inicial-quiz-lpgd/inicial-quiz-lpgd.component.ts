import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial-quiz-lpgd',
  templateUrl: './inicial-quiz-lpgd.component.html',
  styleUrls: ['./inicial-quiz-lpgd.component.scss']
})
export class InicialQuizLpgdComponent {
  Resultado: string = "Algum resultado";
  Data: string = "Alguma data";
  showQuizComponent: boolean = true;
  
}
