import { QuizService } from './../../../core/services/http/quiz.service';
import { Component, Input } from '@angular/core';
import { Quiz } from '../../../core/interfaces/quiz.interface'
@Component({
  selector: 'app-inicial-quiz-lpgd',
  templateUrl: './inicial-quiz-lpgd.component.html',
  styleUrls: ['./inicial-quiz-lpgd.component.scss']
})
export class InicialQuizLpgdComponent {
  showQuizComponent: boolean = true;
  quizzes: Quiz[] = [];

  constructor(
    private quizService: QuizService
  ){}

  show(){
    this.showQuizComponent = false;
  }
  off(){
    this.showQuizComponent = true;
  }
  async ngOnInit() {
    this.quizzes = await this.quizService.getAll();
  }
}
