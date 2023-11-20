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
  // getAll(){
  //   return firstValueFrom(this.http.get<Quiz[]>(`${this.API_ROUTE}/${userId}`));
  // }

  getAll(): Promise<Quiz[]> {
    return firstValueFrom(this.http.get<Quiz[]>(`${this.API_ROUTE}`));
  }
  create(answers: CreateQuiz): Promise<CreateQuiz[]> {
    return firstValueFrom(this.http.post<CreateQuiz[]>(this.API_ROUTE, answers));
  }
}
