import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { InventoryService } from 'src/app/core/services/http/inventory.service';

@Component({
  selector: 'app-inicial-inventario',
  templateUrl: './inicial-inventario.component.html',
  styleUrls: ['./inicial-inventario.component.scss']
})
export class InicialInventarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tagName', 'sector', 'createdAt', 'edit', 'delete'];

  inventoryCreation = false;

  inventoryData!: MatTableDataSource<Inventory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private readonly router: Router,
    private _snackbar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer,
    private readonly inventoryService: InventoryService
  ) {
  }

  ngAfterViewInit() {
    this.inventoryData.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.inventoryData = new MatTableDataSource<Inventory>(this.inventoryService.getAll());
    // console.log(this.inventoryData);
  }

  // private generateRandomString() {
  //   let result = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (let i = 0; i < 5; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     result += characters.charAt(randomIndex);
  //   }

  //   return result;
  // }

  // announceSortChange(event: any) {
  //   const sortState: Sort = event;
  //   console.log(sortState)
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  create(){

  }

  edit(inventory: Inventory) {
    console.log(inventory)
  }

  delete(inventory: Inventory) {
    console.log(inventory)
  }

}
