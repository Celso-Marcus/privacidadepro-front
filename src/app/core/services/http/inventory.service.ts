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

  getAll(){
    // return [
    //   {
    //     "id": "1",
    //     "tagName": "Inventory Item 1",
    //     "sector": "Sector A",
    //     "colletedData": "Collected Data 1",
    //     "sourceData": "Source Data 1",
    //     "reasonData": "Reason Data 1",
    //     "howStorage": "Storage Method 1",
    //     "securityData": "Security Information 1",
    //     "deadlineData": "Deadline 1",
    //     "justificationData": "Justification 1",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 1",
    //     "controller": "Controller 1",
    //     "createdAt": new Date()
    //   },
    //   {
    //     "id": "2",
    //     "tagName": "Inventory Item 2",
    //     "sector": "Sector B",
    //     "colletedData": "Collected Data 2",
    //     "sourceData": "Source Data 2",
    //     "reasonData": "Reason Data 2",
    //     "howStorage": "Storage Method 2",
    //     "securityData": "Security Information 2",
    //     "deadlineData": "Deadline 2",
    //     "justificationData": "Justification 2",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 2",
    //     "controller": "Controller 2",
    //     "createdAt": new Date()
    //   },
    //   {
    //     "id": "3",
    //     "tagName": "Inventory Item 3",
    //     "sector": "Sector C",
    //     "colletedData": "Collected Data 3",
    //     "sourceData": "Source Data 3",
    //     "reasonData": "Reason Data 3",
    //     "howStorage": "Storage Method 3",
    //     "securityData": "Security Information 3",
    //     "deadlineData": "Deadline 3",
    //     "justificationData": "Justification 3",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 3",
    //     "controller": "Controller 3",
    //     "createdAt": new Date()
    //   },
    //   {
    //     "id": "4",
    //     "tagName": "Inventory Item 4",
    //     "sector": "Sector D",
    //     "colletedData": "Collected Data 4",
    //     "sourceData": "Source Data 4",
    //     "reasonData": "Reason Data 4",
    //     "howStorage": "Storage Method 4",
    //     "securityData": "Security Information 4",
    //     "deadlineData": "Deadline 4",
    //     "justificationData": "Justification 4",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 4",
    //     "controller": "Controller 4",
    //     "createdAt": new Date()
    //   },
    //   {
    //     "id": "5",
    //     "tagName": "Inventory Item 5",
    //     "sector": "Sector E",
    //     "colletedData": "Collected Data 5",
    //     "sourceData": "Source Data 5",
    //     "reasonData": "Reason Data 5",
    //     "howStorage": "Storage Method 5",
    //     "securityData": "Security Information 5",
    //     "deadlineData": "Deadline 5",
    //     "justificationData": "Justification 5",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 5",
    //     "controller": "Controller 5",
    //     "createdAt": new Date()
    //   },
    //   {
    //     "id": "6",
    //     "tagName": "Inventory Item 6",
    //     "sector": "Sector F",
    //     "colletedData": "Collected Data 6",
    //     "sourceData": "Source Data 6",
    //     "reasonData": "Reason Data 6",
    //     "howStorage": "Storage Method 6",
    //     "securityData": "Security Information 6",
    //     "deadlineData": "Deadline 6",
    //     "justificationData": "Justification 6",
    //     "underAgeData": false,
    //     "sensitiveData": "Sensitive Data 6",
    //     "controller": "Controller 6",
    //     "createdAt": new Date()
    //   }
    // ]

    return firstValueFrom(this.http.get<Inventory[]>(`${this.API_ROUTE}`,));
  }

  create(inventory: CreateInventory){
    return this.http.post<Inventory>(this.API_ROUTE, inventory);
  }

  update(id: string, inventory: Inventory){
    return this.http.patch<Inventory>(`${this.API_ROUTE}/${inventory.id}`, inventory);
  }

  delete(id: string): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.API_ROUTE}/${id}`));
  }
}
