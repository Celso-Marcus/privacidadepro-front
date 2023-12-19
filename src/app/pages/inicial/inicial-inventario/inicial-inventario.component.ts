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
import { PdfService } from 'src/app/core/services/http/pdf.service';

@Component({
  selector: 'app-inicial-inventario',
  templateUrl: './inicial-inventario.component.html',
  styleUrls: ['./inicial-inventario.component.scss']
})
export class InicialInventarioComponent implements OnInit {

  displayedColumns: string[] = ['tagName', 'sector', 'createdAt', 'edit', 'delete', 'download'];

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
    public dialog: MatDialog,
    private pdfService: PdfService
  ) {
  }

  async ngOnInit() {
    const result = await this.inventoryService.getAll();
    this.inventorySize = result.length;
    this.inventoryData = new MatTableDataSource<Inventory>(result);
    this.inventoryData.paginator = this.paginator;
  }

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

  download(inventory: Inventory) {
    try {
      this.pdfService.getInventoryPDF(inventory.id).subscribe(
        (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        }
      );
    }
    catch (error) {
      console.error(error);
      this.onError("Não foi possível baixar o PDF");
    }
  }

}
