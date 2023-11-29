import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { control } from '../../../../core/constants/checklist';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {ControleAcessoDialogComponent} from '../../../components/dialogs/controle-acesso-dialog/controle-acesso-dialog.component';
/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-checklist-ti-controle-de-acesso',
  templateUrl: './checklist-ti-controle-de-acesso.component.html',
  styleUrls: ['./checklist-ti-controle-de-acesso.component.scss'],
})
export class ChecklistTiControleDeAcessoComponent {
  @Input() control = control;
  checked: boolean[] = new Array(7).fill(false);
  noChecked: boolean[] = new Array(7).fill(false);
  checklistForm: FormGroup;

  constructor(private MatDialog: MatDialog,private formBuilder: FormBuilder) {
    const formControls: any = {};
    this.control.forEach((_, index) => {
      formControls[`question${index}`] = control[index], Validators.required;
      formControls[`sim${index}`] = [false];
      formControls[`nao${index}`] = [false];
    });
    this.checklistForm = this.formBuilder.group(formControls);
  }

  openDialog() {
    this.MatDialog.open(ControleAcessoDialogComponent);
  }


  handleSubmit() {
    const formData = this.checklistForm.value;
    console.log(formData);

    // Aqui você pode enviar 'dataToSend' para o backend usando um serviço HTTP
    // Exemplo: this.http.post('sua_url_backend', dataToSend).subscribe(response => { ... });
  }
}

