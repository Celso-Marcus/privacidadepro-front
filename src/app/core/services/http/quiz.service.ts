import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/env/env-local';
import { Quiz, CreateQuiz } from '../../interfaces/quiz.interface';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private readonly API_ROUTE = `${API_URL}/quiz`;

  constructor(
    private readonly http: HttpClient
  ) { }

  //: Promise<Quiz[]>
  getAll(){
    return [
      {
        id: '1',
        result: '1',
        answers: '1',
        userId: '1',
        createdAt: new Date()
      },
      {
        id: '2',
        result: '2',
        answers: '2',
        userId: '2',
        createdAt: new Date()
      },
      {
        id: '3',
        result: '3',
        answers: '3',
        userId: '3',
        createdAt: new Date()
      }
    ]
    // return firstValueFrom(this.http.get<Quiz[]>(`${this.API_ROUTE}/${userId}`));
  }

  create(answers: CreateQuiz): Promise<CreateQuiz[]> {
    return firstValueFrom(this.http.post<CreateQuiz[]>(this.API_ROUTE, answers));
  }
}
