import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { InventoryService } from 'src/app/core/services/http/inventory.service';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-inicial-inventario',
  templateUrl: './inicial-inventario.component.html',
  styleUrls: ['./inicial-inventario.component.scss']
})
export class InicialInventarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tagName', 'sector', 'createdAt', 'edit', 'delete'];

  inventory: Inventory | undefined;
  inventoryForm = false;
  inventoryCreation = false;

  inventoryData!: MatTableDataSource<Inventory>;
  inventorySize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly router: Router,
    private _snackbar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer,
    private readonly inventoryService: InventoryService,
    public dialog: MatDialog
  ) {
  }

  async ngOnInit() {
    const result = await this.inventoryService.getAll();
    this.inventorySize = result.length;
    this.inventoryData = new MatTableDataSource<Inventory>(result);
    this.inventoryData.paginator = this.paginator;
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

  viewList() {
    this.inventoryForm = false;
    this.inventoryCreation = false;
    location.reload();
  }

  create() {
    this.inventoryForm = true;
    this.inventoryCreation = true;
  }

  edit(inventory: Inventory) {
    this.inventoryForm = true;
    this.inventoryCreation = false;
    this.inventory = inventory;
  }

  async delete(inventory: Inventory) {
    try {
      const result = await firstValueFrom(this.dialog.open(ConfirmDialogComponent, { data: "Você quer deletar esse item?" }).afterClosed());
      if(result){
        await this.inventoryService.delete(inventory.id);
      }
    } catch (error) {
      console.error(error);
      this.onError("Não foi possível deletar o item");
    }
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    })
  }

}
