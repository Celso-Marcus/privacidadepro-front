import { Incident } from 'src/app/core/interfaces/incident.interface';
import { CrudService } from './../../../../core/services/http/crud.service';
import { Component, Input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FloatLabelType } from '@angular/material/form-field';
import * as underscore from 'underscore';

@Component({
  selector: 'app-avancado-criar-incidentes',
  templateUrl: './avancado-criar-incidentes.component.html',
  styleUrls: ['./avancado-criar-incidentes.component.scss']
})
export class AvancadoCriarIncidentesComponent {
  @Input() incidentSize!: number
  @Input() incident!: any
  @Input() isCreate!: boolean

  form!: FormGroup;

  floatLabelControl = 'always' as FloatLabelType;

  incidentId!: number;

  initialForm = {
    comunication: ['', [Validators.required]],
    ocorrencia: ['', [Validators.required]],
  }


  constructor(
    private readonly crudService: CrudService<Incident>,
    private formBuilder: NonNullableFormBuilder,
    private _snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    if(!this.isCreate && this.incident) {
      this.incidentId = Number(this.incident.id);
      this.fillForm(this.incident);
    }
  }

  fillForm(Incident: Incident) {
    this.form.patchValue({
      comunication: Incident.comunicacao,
      ocorrencia: Incident.ocorrencia,
    })
  }

  async submit() {
    const formValue = underscore.clone(this.form.value);
    if (!this.form.valid) {
      this._snackbar.open('Preencha todos os campos.', 'OK', {
        duration: 5000
      });
      return;
    }

    try {
      this.isCreate ?
        await this.crudService.create('incident',formValue) :
        await this.crudService.update('incident',this.incidentId, formValue);
        this._snackbar.open('Inventário salvo com sucesso.', 'OK', {
          duration: 5000
        });
      location.reload();
    } catch (error) {
      console.error(error);
      this._snackbar.open('Erro ao salvar inventário.', 'OK', {
        duration: 5000
      });
    }
  }

}
