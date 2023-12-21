import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { firstValueFrom } from 'rxjs';
import { CrudService } from 'src/app/core/services/http/crud.service';

@Component({
  selector: 'app-inicial-inventario',
  templateUrl: './inicial-inventario.component.html',
  styleUrls: ['./inicial-inventario.component.scss']
})
export class InicialInventarioComponent implements OnInit {

  displayedColumns: string[] = ['tagName', 'sector', 'createdAt', 'edit', 'delete', 'download'];

  inventory: Inventory | undefined;
  inventoryForm = false;
  isCreate = false;

  inventoryData!: MatTableDataSource<Inventory>;
  inventorySize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly router: Router,
    private _snackbar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private crudService: CrudService<Inventory>
  ) {
  }

  async ngOnInit() {
    try {
      const result = await this.crudService.getAll('inventory').toPromise();
      if (result) {
        this.inventorySize = result.length;
        this.inventoryData = new MatTableDataSource<Inventory>(result);
        this.inventoryData.paginator = this.paginator;
      } else {
        console.error("Erro ao obter dados do inventário: resultado indefinido");
        this.onError("Erro ao obter dados do inventário");
      }
    } catch (error) {
      console.error(error);
      this.onError("Erro ao obter dados do inventário");
    }
  }

  viewList() {
    this.inventoryForm = false;
    this.isCreate = false;
    location.reload();
  }

  create() {
    this.inventoryForm = true;
    this.isCreate = true;
  }

  edit(inventory: Inventory) {
    this.inventoryForm = true;
    this.isCreate = false;
    this.inventory = inventory;
  }

  async delete(inventory: Inventory) {
    try {
      const result = await firstValueFrom(
        this.dialog
          .open(ConfirmDialogComponent, { data: "Você quer deletar esse item?" })
          .afterClosed()
      );
      if (result) {
        await this.crudService.delete('inventory', inventory.id).toPromise();
        this._snackbar.open("Item deletado com sucesso", "Fechar", {
          duration: 5000
        });
        location.reload();
      }
    } catch (error) {
      console.error(error);
      this.onError("Não foi possível deletar o item");
    }
  }


  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  download(inventory: Inventory) {
    try {
      this.crudService.download('pdf/inventory',inventory.id).subscribe(
        (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        }
      );
    } catch (error) {
      console.error(error);
      this.onError("Não foi possível baixar o PDF");
    }
  }

}
