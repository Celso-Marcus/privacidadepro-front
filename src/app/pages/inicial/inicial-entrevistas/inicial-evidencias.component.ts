import { Component, OnInit } from '@angular/core';
import { EditDialogComponent } from './entrevistas-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { InterviewService } from 'src/app/core/services/http/interview.service';
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
    private interviewService: InterviewService,
    private snackbar: MatSnackBar
    ){}

  ngOnInit() {
    this.getData();
  }

  async getData(){
    const result = await this.interviewService.getAll();
    this.dataSource = new MatTableDataSource<Interview>(result);
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

  download(element: any) {
    this.interviewService.download(element.filePath)
    .subscribe((response) => {
      const blob = new Blob([response], { type: 'audio/mp3' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  async delete(element: any) {
    try {
      const result = await firstValueFrom(this.dialog.open(ConfirmDialogComponent,
        { data: "Tem certeza que deseja deletar essa entrevista?" }).afterClosed());
      if(result){
        await this.interviewService.delete(element.id);
        this.getData();
        this.snackbar.open('Entrevista deletada com sucesso.', 'Fechar',
        { duration: 5000 });
      }
    } catch (error) {
      console.error(error);
      this.snackbar.open('Erro ao deletar entrevista.', 'Fechar',
      { duration: 5000 });
    }
  }
}
