import { CrudService } from './../../../core/services/http/crud.service';
import { Component, OnInit } from '@angular/core';
import { EditDialogComponent } from './entrevistas-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Interview } from 'src/app/core/interfaces/interview.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-inicial-evidencias',
  templateUrl: './inicial-evidencias.component.html',
  styleUrls: ['./inicial-evidencias.component.scss']
})
export class InicialEvidenciasComponent implements OnInit {

  displayedColumns: string[] = ['createdAt','filePath', 'download', 'delete'];
  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private crudService: CrudService<Interview>
    ){}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.crudService.getAll('interview')
        .subscribe((result: Interview[]) => {
          this.dataSource = new MatTableDataSource<Interview>(result);
        });
    } catch (error) {
      console.error(error);
    }
  }

  openDialog() {
    this.dialog.open(EditDialogComponent, {
      data: { title: 'Adicionar Entrevista.' },
    }).afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.getData();
      }
    });
  }

  download(element: Interview) {
    this.crudService.download('interview', element.filePath)
    .subscribe((response) => {
      const blob = new Blob([response], { type: 'audio/mp3' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }, (error) => {
      console.error(error);
    });
  }

  async delete(element: Interview) {
    try {
      const result = await firstValueFrom(this.dialog.open(ConfirmDialogComponent,
        { data: "Tem certeza que deseja deletar essa entrevista?" }).afterClosed());
      if(result){
        await this.crudService.delete('interview',element.id).toPromise();
        this.getData();
        this.snackbar.open('Entrevista deletada com sucesso.', 'Fechar',
        { duration: 5000 });
        location.reload();
      }
    } catch (error) {
      console.error(error);
      this.snackbar.open('Erro ao deletar entrevista.', 'Fechar',
      { duration: 5000 });
    }
  }
}
