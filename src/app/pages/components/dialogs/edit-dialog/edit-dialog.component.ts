import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  @Input() title?: string;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  selectedFile: File | null = null;
  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onClick(): void {
    this.closeDialog.emit();
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  enviar(): void {
    if (this.selectedFile) {
      const fileData = {
        file: this.selectedFile,
        // Você pode incluir dados adicionais, se necessário
      };
      this.sendData.emit(fileData);

      this.dialogRef.close();
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
  }

}
