import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { control } from '../../../../core/constants/checklist';
import { EditDialogComponent } from '../../../inicial/inicial-entrevistas/entrevistas-dialog/edit-dialog.component';

export interface PeriodicElement {
  id: number;
  file: string;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, file: 'teste1.txt', date: new Date() },
  { id: 2, file: 'teste2.txt', date: new Date() },
  { id: 3, file: 'teste3.txt', date: new Date() },
  { id: 4, file: 'teste4.txt', date: new Date() },
  { id: 5, file: 'teste5.txt', date: new Date() },
];

@Component({
  selector: 'app-controle-acesso-dialog',
  templateUrl: './controle-acesso-dialog.component.html',
  styleUrls: ['./controle-acesso-dialog.component.scss'],
})
export class ControleAcessoDialogComponent {
  displayedColumns: string[] = ['id', 'name', 'date', 'download', 'close'];
  dataSource: PeriodicElement[][] = [];
  checked = true;
  noChecked = false;
  controlList = control;
  @ViewChild(MatTable) table: MatTable<PeriodicElement[]> | undefined;


  constructor(
    public dialogRef: MatDialogRef<ControleAcessoDialogComponent>,public dialog: MatDialog,
  ) {
    this.controlList.forEach(() => {
      this.dataSource.push([...ELEMENT_DATA]);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { title: 'Adicionar Arquivos' }, // You can pass data to EditDialogComponent
    });
    dialogRef.componentInstance.sendData.subscribe((fileData: any) => {
      console.log('File data received from child dialog:', fileData);
      // Lógica para enviar ou atualizar arquivos vai aqui
      // Você pode enviar fileData para a sua API para processamento
    });
  }


  removeData() {
    this.dataSource.pop();
    this.table?.renderRows();
  }

  onClick(): void {
    this.dialogRef.close();
  }
}
