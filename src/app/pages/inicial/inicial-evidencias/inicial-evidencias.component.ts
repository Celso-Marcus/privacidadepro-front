import { Component } from '@angular/core';
import { EditDialogComponent } from '../../components/dialogs/edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicial-evidencias',
  templateUrl: './inicial-evidencias.component.html',
  styleUrls: ['./inicial-evidencias.component.scss']
})
export class InicialEvidenciasComponent {
  displayedColumns: string[] = ['id', 'name', 'date', 'download', 'close'];
  dataSource: any[][] = [];
  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { title: 'Adicionar Evidências.' }, // You can pass data to EditDialogComponent
    });
    dialogRef.componentInstance.sendData.subscribe((fileData: any) => {
      console.log('File data received from child dialog:', fileData);
      // Lógica para enviar ou atualizar arquivos vai aqui
      // Você pode enviar fileData para a sua API para processamento
    });
  }
}
