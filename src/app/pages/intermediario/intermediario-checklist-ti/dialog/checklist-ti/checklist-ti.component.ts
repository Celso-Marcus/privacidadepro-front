import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ACCESS_CONTROL } from '../../../../../core/constants/checklist';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {ChecklistEvidenceUpload} from '../evidencias-upload/upload-evidencias.component';
import { Checklist } from 'src/app/core/interfaces/checklist.interface';
import { ChecklistService } from 'src/app/core/services/http/checklist.service';

@Component({
  selector: 'app-checklist-ti',
  templateUrl: './checklist-ti.component.html',
  styleUrls: ['./checklist-ti.component.scss'],
})
export class ChecklistTiTopicComponent implements OnInit{
  questions!: string[];
  checked!: boolean[];
  checklist!: Checklist;

  constructor(
    public dialogRef: MatDialogRef<ChecklistTiTopicComponent>,
    private MatDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    private checklistService: ChecklistService
    ) {
    this.checklist = this.data.checklist;
    this.questions = this.data.categoryType;
  }

  ngOnInit(): void {
    this.checked = this.checklist.answers
      .split(',')
      .map(answer => answer === 'true');
  }

  openDialog() {
    this.MatDialog.open(ChecklistEvidenceUpload, {
      data: this.checklist
    });
  }

  async handleSubmit() {
    this.checklist.answers = this.checked.join(',');
    this.checklist = await this.checklistService.update(this.checklist);
    this.handleCheckedArray();
  }

  handleCheckedArray(){
    this.checked = this.checklist.answers
    .split(',')
    .map(answer => answer === 'true');
  }

  close(): void {
    this.dialogRef.close();
  }
}

