import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InterviewService } from 'src/app/core/services/http/interview.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadFileDialogComponent implements OnInit{
  @Input() title?: string;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  selectedFile: File | null = null;
  fileName: string = '';

  FORMATS_ALLOWED: string[] = ['mp3', 'm4a', 'wav', 'ogg'];

  constructor(
    private dialogRef: MatDialogRef<UploadFileDialogComponent>,
    private snackbar: MatSnackBar,
    private interviewService: InterviewService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

  close(): void {
    this.closeDialog.emit();
    this.dialogRef.close(false);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  async submit() {
    if (!this.selectedFile || !this.fileName) {
      this.snackbar.open('Todos os campos são necessários.', 'Fechar', { duration: 5000 });
      console.error('Todos os campos são necessários.');
      return;
    }

    if (!this.selectedFileShouldBeAudioFile(this.selectedFile)) {
      this.snackbar.open('O Formato do arquivo deve ser mp3.', 'Fechar', { duration: 5000 });
      console.error('O Formato do arquivo deve ser mp3.');
      return;
    }

    const multiPartFormData = new FormData();
    multiPartFormData.append('file', this.selectedFile);
    multiPartFormData.append('fileName', this.fileName);

    await this.interviewService.create(multiPartFormData);

    this.dialogRef.close(true);
  }

  selectedFileShouldBeAudioFile(file: any): boolean {
    const fileExtension: string = file.name.split('.').pop().toLowerCase();
    return this.FORMATS_ALLOWED.includes(fileExtension);
  }

}
