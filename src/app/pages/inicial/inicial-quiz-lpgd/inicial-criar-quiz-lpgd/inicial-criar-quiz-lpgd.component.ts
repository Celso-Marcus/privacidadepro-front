import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adequacy, conformity, government, security, topics, traceability, transparency, violations } from '../../../../core/constants/quizQuestions';
import { QuizService } from '../../../../core/services/http/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inicial-criar-quiz-lpgd',
  templateUrl: './inicial-criar-quiz-lpgd.component.html',
  styleUrls: ['./inicial-criar-quiz-lpgd.component.scss']
})
export class InicialCriarQuizLpgdComponent {
  @Output() dontShow = new EventEmitter<void>();

  step: number = 1;

  violations: string[] = violations;
  security: string[] = security;
  government: string[] = government;
  conformity: string[] = conformity;
  adequacy: string[] = adequacy;
  traceability: string[] = traceability;
  transparency: string[] = transparency;
  topics: string[] = topics;

  answers: number[] = new Array(24).fill(Number(0));
  createdAt = new Date();
  maturityResult: number = 0;
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dpoName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])]
    })
  }
  enableButton(): string {
    if (this.formulario.valid) {
      return 'buts'
    } else {
      return 'botao__desabilitado'
    }
  }

  cancelQuiz() {
    this.dontShow.emit();// Altera a variável para mostrar o componente do Quiz
  }

  async handleQuiz() {
    const weightMappings = [
      [0, 0],
      [1, 0.25],
      [2, 0.5],
      [3, 1],
    ];

    for (let i = 0; i < this.answers.length; i++) {
      const answer = this.answers[i];
      let weight = 0;

      console.log(answer);

      if (i < 6) {
        weight = 0.25;
      }
      else if (i <= 11) {
        weight = 0.25;
      }
      else if (i <= 13) {
        weight = 0.1;
      }
      else if (i <= 16) {
        weight = 0.05;
      }
      else if (i === 17) {
        weight = 0.05;
      }
      else if (i <= 20) {
        weight = 0.15;
      }
      else if (i <= 23) {
        weight = 0.15;
      }

      const [value, multiplier] = weightMappings[answer];
      this.maturityResult += value * (weight * multiplier);
    }

    this.maturityResult *= 10;


    const result = this.getResultFromMaturityResult();

    const raw = {
      answers: this.answers.toString(),
      result,
      dpoName: this.formulario.get('dpoName')?.value,
      createdAt: this.createdAt,
    };

    try {
      await this.quizService.create(raw);
      this.step = 1;
      this._snackbar.open(`Quiz feito com sucesso! Seu resultado foi ${result}`, 'Fechar', {
        duration: 5000
      });
      this.router.navigate(['/fase/inicial']);
    }
    catch (error: any) {
      console.error(error);
      this._snackbar.open(`Erro ao criar o quiz!`, 'Fechar', {
        duration: 3000
      });
    }
  }

  private getResultFromMaturityResult() {
    if (this.maturityResult < 2.99) {
      return 'Iniciante';
    }
    else if (this.maturityResult >= 3.0 && this.maturityResult <= 4.99) {
      return 'Básico';
    }
    else if (this.maturityResult >= 5.0 && this.maturityResult <= 6.99) {
      return 'Intermediário';
    }
    else if (this.maturityResult >= 7.0 && this.maturityResult <= 8.99) {
      return 'Intermediário Superior';
    }
    else {
      return 'Avançado';
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if ((event.code === 'ArrowRight' || event.code === 'Enter') && this.step < 7) {
      this.goNext();
    }
    if (event.code === 'ArrowLeft') {
      this.goBack();
    }
  }

  goNext() {
    console.log(this.answers)
    if (this.formulario.valid) {
      if (this.step < 7) {
        this.step++;
      }
    }
  }

  goBack() {
    if (this.step > 1) {
      this.step--;
    }
  }
}
