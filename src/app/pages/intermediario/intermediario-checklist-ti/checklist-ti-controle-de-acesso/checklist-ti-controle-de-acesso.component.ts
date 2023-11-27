import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { control } from '../../../../core/constants/checklist';

@Component({
  selector: 'app-checklist-ti-controle-de-acesso',
  templateUrl: './checklist-ti-controle-de-acesso.component.html',
  styleUrls: ['./checklist-ti-controle-de-acesso.component.scss'],
})
export class ChecklistTiControleDeAcessoComponent {
  control = control;
  checklist: boolean[] = new Array(7).fill(false);
  fileValues: File[] = new Array(7).fill(null); // Array para armazenar valores de arquivo

  constructor() {}

  handleCheck(index: number) {
    this.checklist[index] = !this.checklist[index];
  }

  handleFileChange(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fileValues[index] = inputElement.files[0];
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    // Criar objeto para enviar para o backend
    const dataToSend = {
      checklist: this.checklist,
      fileValues: this.fileValues,
    };

    console.log(dataToSend);

    // Aqui você pode enviar 'dataToSend' para o backend usando um serviço HTTP
    // Exemplo: this.http.post('sua_url_backend', dataToSend).subscribe(response => { ... });
  }
}

