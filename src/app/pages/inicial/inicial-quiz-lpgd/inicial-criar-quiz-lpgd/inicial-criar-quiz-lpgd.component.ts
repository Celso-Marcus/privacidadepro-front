import { Component, EventEmitter, Input, Output } from '@angular/core';
import {adequacy, conformity, government, security, traceability, violations, transparency , topics} from '../../../../core/constants/quizQuestions'
import {QuizService} from '../../../../core/services/http/quiz.service'
import { Router } from '@angular/router';
import { CreateQuiz } from 'src/app/core/interfaces/quiz.interface';

@Component({
  selector: 'app-inicial-criar-quiz-lpgd',
  templateUrl: './inicial-criar-quiz-lpgd.component.html',
  styleUrls: ['./inicial-criar-quiz-lpgd.component.scss']
})
export class InicialCriarQuizLpgdComponent {
  @Output() naomostrar = new EventEmitter<void>();

  violations: string[] = violations;
  security: string[] = security;
  government: string[] = government;
  conformity: string[] = conformity;
  adequacy: string[] = adequacy;
  traceability: string[] = traceability;
  transparency: string[] = transparency;
  topics: string[] = topics;

  answers = new Array(24).fill("0");

  cancelarQuiz() {
    this.naomostrar.emit();// Altera a variável para mostrar o componente do Quiz
  }
  constructor( private router: Router , private quizService: QuizService){}

  handleQuiz = async () => {
        let maturityResult = 0;
        for(let i in this.answers){
            if ( parseInt(i) < 6 ){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.25;
                    break;
                    case '2':
                        maturityResult += 0.5*0.25;
                    break;
                    case '3':
                        maturityResult += 1*0.25;
                    break;

                }
            }else if (parseInt(i) >= 6 && parseInt(i) >=11 ){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.25;
                    break;
                    case '2':
                        maturityResult += 0.5*0.25;
                    break;
                    case '3':
                        maturityResult += 1*0.25;
                    break;
                }
            }else if (parseInt(i) == 12 && parseInt(i) == 13 ){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.1;
                    break;
                    case '2':
                        maturityResult += 0.5*0.1;
                    break;
                    case '3':
                        maturityResult += 1*0.1;
                    break;
                }
            }else if (parseInt(i) >= 14 && parseInt(i) >= 16 ){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.05;
                    break;
                    case '2':
                        maturityResult += 0.5*0.05;
                    break;
                    case '3':
                        maturityResult += 1*0.05;
                    break;
                }
            }else if (this.answers.includes(17)){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.05;
                    break;
                    case '2':
                        maturityResult += 0.5*0.05;
                    break;
                    case '3':
                        maturityResult += 1*0.05;
                    break;
                }
            }else if (parseInt(i) >= 18 && parseInt(i) >= 20){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.15;
                    break;
                    case '2':
                        maturityResult += 0.5*0.15;
                    break;
                    case '3':
                        maturityResult += 1*0.15;
                    break;
                }
            }else if (parseInt(i) >= 21 && parseInt(i) >= 23){
                switch(this.answers[i]){
                    case '0':
                        maturityResult += 0;
                    break;
                    case '1':
                        maturityResult += 0.25*0.15;
                    break;
                    case '2':
                        maturityResult += 0.5*0.15;
                    break;
                    case '3':
                        maturityResult += 1*0.15;
                    break;
                }
            }
        }
        maturityResult = maturityResult * 10;
        if (maturityResult < 2.99) {
            const textResult = 'Iniciante';
            const raw = {
                answers: this.answers.toString(),
                result: textResult
            };

            this.quizService.create(raw)
            .then((result: any) => {
                if (!result.error) {
                    this.router.navigate(['/inicial/quiz-lgpd']);
                } else {
                    alert(result.message);
                }
            });

        }
        else if ((maturityResult >= 3.00) && (maturityResult <= 4.99)){
            const textResult = 'Básico';
            const raw = {
                answers: this.answers.toString(),
                result: textResult
            };

            this.quizService.create(raw)
            .then((result: any) => {
              if (!result.error) {
                this.router.navigate(['/inicial/quiz-lgpd']);
              } else {
                alert(result.message);
              }
            });
        }
        else if ((maturityResult >= 5.00) && (maturityResult <= 6.99)){
            const textResult = 'Intermediário';
            const raw: CreateQuiz = {
                answers: this.answers.toString(),
                result: textResult
            };

            this.quizService.create(raw)
            .then((result: any) => {
              if (!result.error) {
                this.router.navigate(['/inicial/quiz-lgpd']);
              } else {
                alert(result.message);
              }
            });
        }
        else if ((maturityResult >= 7.00) && (maturityResult <= 8.99)){
            const textResult = 'Intermediário Superior';
            const raw = {
                answers: this.answers.toString(),
                result: textResult
            };
            this.quizService.create(raw)
            .then((result: any) => {
              if (!result.error) {
                this.router.navigate(['/inicial/quiz-lgpd']);
              } else {
                alert(result.message);
              }
            });
        }
        else if (maturityResult >= 9.00){
            const textResult = 'Avançado';
            const raw = {
                answers: this.answers.toString(),
                result: textResult
            };

            this.quizService.create(raw)
            .then((result: any) => {
              if (!result.error) {
                this.router.navigate(['/inicial/quiz-lgpd']);
              } else {
                alert(result.message);
              }
            });
        }
    }
}
