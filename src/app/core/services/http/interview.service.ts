import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "src/env/env-local";
import { Interview } from "../../interfaces/interview.interface";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private readonly API_ROUTE = `${API_URL}/interview`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return firstValueFrom(this.http.get<Interview[]>(`${this.API_ROUTE}`,));
  }

  create(formData: FormData) {
    return firstValueFrom(this.http.post<Interview>(`${this.API_ROUTE}`, formData));
  }

  download(fileName: string) {
    return this.http.get(`${this.API_ROUTE}/${fileName}`, { responseType: 'blob' });
  }

  delete(id: number) {
    return firstValueFrom(this.http.delete<void>(`${this.API_ROUTE}/${id}`));
  }
}
