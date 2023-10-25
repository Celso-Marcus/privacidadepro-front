import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dpo } from '../../interfaces/dpo.interface';
import { API_URL } from 'src/env/env-local';

@Injectable({
  providedIn: 'root'
})
export class DpoServiceService {

  private readonly API_ROUTE = `${API_URL}/dpo`;


  constructor( private readonly http: HttpClient) {

   }

  create(quiz: Dpo){
    return {
      id: '1',
      name:'josé antonio',
      createdAt: new Date()
    }
    // return firstValueFrom(this.http.post<Quiz>(this.API_ROUTE, quiz));
  }
}

