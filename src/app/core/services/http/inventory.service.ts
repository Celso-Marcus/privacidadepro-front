import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "src/env/env-local";
import { CreateInventory, Inventory } from "../../interfaces/inventory.interface";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private readonly API_ROUTE = `${API_URL}/inventory`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return firstValueFrom(this.http.get<Inventory[]>(`${this.API_ROUTE}`,));
  }

  create(inventory: CreateInventory) {
    return firstValueFrom(this.http.post<Inventory>(this.API_ROUTE, inventory));
  }

  update(id: number, inventory: Inventory) {
    return firstValueFrom(this.http.patch<Inventory>(`${this.API_ROUTE}/${id}`, inventory));
  }

  delete(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.API_ROUTE}/${id}`));
  }
}
