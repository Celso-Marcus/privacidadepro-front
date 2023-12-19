import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "src/env/env-local";

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private readonly API_ROUTE = `${API_URL}/pdf`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getInventoryPDF(id: number) {
    return this.http.get(`${this.API_ROUTE}/inventory/${id}`, { responseType: 'blob' });
  }
}
