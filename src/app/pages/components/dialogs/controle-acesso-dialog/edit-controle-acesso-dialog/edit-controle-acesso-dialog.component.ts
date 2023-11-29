import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-controle-acesso-dialog',
  templateUrl: './edit-controle-acesso-dialog.component.html',
  styleUrls: ['./edit-controle-acesso-dialog.component.scss']
})
export class EditControleAcessoDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<EditControleAcessoDialogComponent>
  ) {}
  onClick(): void {
    this.dialogRef.close();
  }
}
