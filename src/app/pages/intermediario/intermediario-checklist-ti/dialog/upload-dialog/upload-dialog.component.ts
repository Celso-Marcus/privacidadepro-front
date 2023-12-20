import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChecklistService } from 'src/app/core/services/http/checklist.service';
import { InterviewService } from 'src/app/core/services/http/interview.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadFileDialogComponent implements OnInit{

  selectedFiles: FileList | null = null;
  fileName: string = '';
  id!: number;

  constructor(
    private dialogRef: MatDialogRef<UploadFileDialogComponent>,
    private snackbar: MatSnackBar,
    private checklistService: ChecklistService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(false);
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  async submit() {
    if (!this.selectedFiles) {
      this.snackbar.open('Nenhum arquivo selecionado', 'Fechar', { duration: 5000 });
      console.error('Nenhum arquivo selecionado');
      return;
    }

    const multiPartFormData = new FormData();
    multiPartFormData.append('id', this.id.toString());
    Object.keys(this.selectedFiles).forEach((key: any) => {
      if(this.selectedFiles) {
        multiPartFormData.append('files', this.selectedFiles[key]);
      }
    })
    await this.checklistService.upload(multiPartFormData);

    this.dialogRef.close(true);
  }
}
