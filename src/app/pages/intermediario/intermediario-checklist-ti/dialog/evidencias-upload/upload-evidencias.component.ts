import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ACCESS_CONTROL } from '../../../../../core/constants/checklist';
import { Checklist, ChecklistFile } from 'src/app/core/interfaces/checklist.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ChecklistService } from 'src/app/core/services/http/checklist.service';
import { UploadFileDialogComponent } from '../upload-dialog/upload-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-evidencias',
  templateUrl: './upload-evidencias.component.html',
  styleUrls: ['./upload-evidencias.component.scss'],
})
export class ChecklistEvidenceUpload implements OnInit {
  displayedColumns: string[] = ['formatedName', 'date', 'download', 'close'];
  dataSource!: any;
  checklist!: Checklist;
  files!: ChecklistFile[];

  constructor(
    public dialogRef: MatDialogRef<ChecklistEvidenceUpload>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private checklistService: ChecklistService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.checklist = this.data;
    console.log(this.data);
    this.files = this.data.files.map((file: any) => this.formatFile(file));
    this.dataSource = new MatTableDataSource<ChecklistFile>(this.files);
  }

  async getData(){
    this.checklist = await this.checklistService.findOne(this.data.id);
    this.files = this.checklist.files.map((file: any) => this.formatFile(file));
    this.dataSource = new MatTableDataSource<ChecklistFile>(this.files);
  }

  openDialog() {
    this.dialog.open(UploadFileDialogComponent, {
      data: this.checklist.id,
    }).afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.getData();
      }
    });
  }

  async delete(file: ChecklistFile) {
    try {
      await this.checklistService.delete(this.checklist.id, file.fileName);
      this.getData();
      this.snackBar.open('Arquivo deletado com sucesso.', 'Fechar', { duration: 5000 });
    } catch (error) {
      console.error(error);
      this.snackBar.open('Erro ao deletar arquivo.', 'Fechar', { duration: 5000 });
    }
  }

  download(file: ChecklistFile){
    this.checklistService.download(file.fileName).subscribe((response: any) => {
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.formatedName);
      document.body.appendChild(link);
      link.click();
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  private formatFile(fileName: string): ChecklistFile {

    const parts = fileName.split("_");
    const firstPart = parts.slice(0, 6).join("_");
    const secondPart = parts.slice(6).join("_").split("categoria")[1].slice(1);

    const dateParts = firstPart.split("_");
    const year = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[0]);

    const date = new Date(year, month, day);

    return {
      formatedName: secondPart,
      date: date,
      fileName: fileName,
    }
  }
}
