import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Incident } from 'src/app/core/interfaces/incident.interface';
import { CrudService } from 'src/app/core/services/http/crud.service';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';
import { firstValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-avancado-incidentes',
  templateUrl: './avancado-incidentes.component.html',
  styleUrls: ['./avancado-incidentes.component.scss']
})
export class AvancadoIncidentesComponent {
  displayedColumns: string[] = ['tagName', 'createdAt', 'edit', 'delete'];

  showIncidentComponent: boolean = true;
  incident: Incident | undefined;

  incidentForm = false;
  isCreate = false;

  incidentData!: MatTableDataSource<Incident>;
  incidentSize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _snackbar: MatSnackBar,
    public dialog: MatDialog,
    private crudService: CrudService<Incident>
  ){}

  viewList() {
    this.incidentForm = false;
    this.isCreate = false;
    location.reload();
  }

  create() {
    this.incidentForm = true;
    this.isCreate = true;
  }

  edit(incident: Incident) {
    this.incidentForm = true;
    this.isCreate = false;
    this.incident = incident;
  }


  async ngOnInit() {
    try {
      const result = await this.crudService.getAll('incident').toPromise();
      if (result) {
        this.incidentSize = result.length;
        this.incidentData = new MatTableDataSource<Incident>(result);
        this.incidentData.paginator = this.paginator;
      } else {
        console.error("Erro ao obter dados do incidente: resultado indefinido");
        this.onError("Erro ao obter dados do incidente");
      }
    } catch (error) {
      console.error(error);
      this.onError("Erro ao obter dados do incidente");
    }
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  async delete(incident: Incident) {
    try {
      const result = await firstValueFrom(
        this.dialog
          .open(ConfirmDialogComponent, { data: "Você quer deletar esse item?" })
          .afterClosed()
      );
      if (result) {
        await this.crudService.delete('incident', incident.id).toPromise();
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
}
