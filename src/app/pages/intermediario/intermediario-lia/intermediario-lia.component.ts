import { Component, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { LIA } from 'src/app/core/interfaces/lia.interface';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LiaService } from 'src/app/core/services/http/lia.service';
import { PdfService } from 'src/app/core/services/http/pdf.service';

@Component({
  selector: 'app-intermediario-lia',
  templateUrl: './intermediario-lia.component.html',
  styleUrls: ['./intermediario-lia.component.scss']
})
export class IntermediarioLiaComponent {
  displayedColumns: string[] = ['id', 'inventoryName', 'updatedAt', 'download', 'edit', 'delete'];

  lia: LIA | undefined;
  liaForm = false;
  liaCreation = false;

  liaData!: MatTableDataSource<LIA>;
  liaSize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly router: Router,
    private _snackbar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer,
    private liaService: LiaService,
    private pdfService: PdfService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    const result = await this.liaService.getAll();
    this.liaSize = result.length;
    this.liaData = new MatTableDataSource<LIA>(result);
    this.liaData.paginator = this.paginator;
  }

  viewList() {
    this.liaForm = false;
    this.liaCreation = false;
    this.loadData();
  }

  create() {
    this.liaForm = true;
    this.liaCreation = true;
  }

  edit(lia: LIA) {
    this.liaForm = true;
    this.liaCreation = false;
    this.lia = lia;
  }

  dowload(lia: LIA) {
    this.pdfService.getLiaPDF(lia.id).subscribe(blob => {
      const objectUrl = URL.createObjectURL(blob)
      window.open(objectUrl, '_blank')
    });

  }

  async delete(lia: LIA) {
    try {
      const result = await firstValueFrom(this.dialog.open(ConfirmDialogComponent, { data: "Você quer deletar esse item?" }).afterClosed());
      if(result){
        await this.liaService.delete(lia.id);
        this.loadData();
        this._snackbar.open("Item deletado com sucesso", "Fechar", { duration: 3000 });
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

