import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/env/env-local';
import { Sector } from '../interfaces/sector.interface';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private readonly API_ROUTE = `${API_URL}/sector`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return [
      {
        id: 1,
        name: 'Contabilidade',
        createdAt: new Date()
      },
      {
        id: 2,
        name: 'TI',
        createdAt: new Date()
      },
      {
        id: 3,
        name: 'Financeiro',
        createdAt: new Date()
      },
      {
        id: 4,
        name: 'Marketing',
        createdAt: new Date()
      },
      {
        id: 5,
        name: 'RH',
        createdAt: new Date()
      }
    ]
    // return firstValueFrom(this.http.get<Quiz[]>(`${this.API_ROUTE}/${userId}`));
  }
}
