import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "src/env/env-local";
import { Checklist } from "../../interfaces/checklist.interface";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private readonly API_ROUTE = `${API_URL}/checklists`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return firstValueFrom(this.http.get<Checklist[]>(`${this.API_ROUTE}`));
  }

  findOne(id: number) {
    return firstValueFrom(this.http.get<Checklist>(`${this.API_ROUTE}/findOne/${id}`));
  }

  upload(formData: FormData) {
    return firstValueFrom(this.http.post<Checklist>(`${this.API_ROUTE}/file/upload`, formData));
  }

  update(checkList: Checklist){
    return firstValueFrom(this.http.patch<Checklist>(`${this.API_ROUTE}`, checkList));
  }

  download(fileName: string) {
    return this.http.get(`${this.API_ROUTE}/file/download/${fileName}`, { responseType: 'blob' });
  }

  delete(id: number, fileName: string) {
    return firstValueFrom(this.http.delete<void>(`${this.API_ROUTE}/file/${id}/${fileName}`));
  }
}
