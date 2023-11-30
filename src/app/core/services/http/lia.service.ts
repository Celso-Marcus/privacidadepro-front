import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/env/env-local';
import { LIA } from '../../interfaces/lia.interface';
import { Inventory } from '../../interfaces/inventory.interface';

@Injectable({
  providedIn: 'root'
})
export class LiaService {

  private readonly API_ROUTE = `${API_URL}/legitimate-interest`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return firstValueFrom(this.http.get<LIA[]>(`${this.API_ROUTE}`));
  }

  getInventoriesLI(){
    return firstValueFrom(this.http.get<Inventory[]>(`${this.API_ROUTE}/inventories`));
  }

  create(payload: any) {
    return firstValueFrom(this.http.post<LIA>(`${this.API_ROUTE}`, payload));
  }

  update(id: number, payload: LIA) {
    return firstValueFrom(this.http.patch<LIA>(`${this.API_ROUTE}/${id}`, payload));
  }

  delete(id: number) {
    return firstValueFrom(this.http.delete<void>(`${this.API_ROUTE}/${id}`));
  }

  download(id: number) {
    return this.http.get(`${this.API_ROUTE}/download/${id}`, { responseType: 'blob' });
  }
}
