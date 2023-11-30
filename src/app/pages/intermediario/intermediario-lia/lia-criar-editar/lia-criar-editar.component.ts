import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { LIA } from 'src/app/core/interfaces/lia.interface';
import { LiaService } from 'src/app/core/services/http/lia.service';

@Component({
  selector: 'app-lia-criar-editar',
  templateUrl: './lia-criar-editar.component.html',
  styleUrls: ['./lia-criar-editar.component.scss']
})
export class LIACriarEditarComponent implements OnInit {

  @Input()
  liaCreation!: boolean;

  @Input()
  lia: LIA | undefined;

  @Input()
  liaSize: number | undefined;

  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

  step: number = 1;

  liaId!: number;

  inventoriesLI: Inventory[] | undefined;

  inventoryField = true;

  initialForm = {
    inventoryName: ['Teste', [Validators.required]],
    dpoName: ['', [Validators.required]],
    justification: ['', [Validators.required]],
    1: ['Não', [Validators.required]],
    2: ['Não', [Validators.required]],
    3: ['Não', [Validators.required]],
    4: ['Não', [Validators.required]],
    5: ['Não', [Validators.required]],
    6: ['Não', [Validators.required]],
    7: ['Não', [Validators.required]],
    8: ['Não', [Validators.required]],
    9: ['Não', [Validators.required]],
    10: ['Não', [Validators.required]],
    11: ['Não', [Validators.required]],
    12: ['Não', [Validators.required]],
    13: ['Não', [Validators.required]],
  };

  constructor(
    private readonly liaService: LiaService,
    private formBuilder: NonNullableFormBuilder,
    private _snackbar: MatSnackBar,
  ) {
  }

  async ngOnInit() {
    this.form = this.formBuilder.group(this.initialForm);
    if(this.liaCreation){
      this.inventoriesLI = (await this.liaService.getInventoriesLI());
    }
    if(!this.liaCreation && this.lia){
      this.liaId = Number(this.lia.id);
      this.fillForm(this.lia);
    }
  }

  fillForm(lia: LIA) {
    const anwsersArray = lia.answers.split(",")
      .map(answer => answer.trim());
    this.form.patchValue({
      inventoryName: lia.inventoryName,
      dpoName: lia.dpoName,
      justification: lia.justification,
      1: anwsersArray[0],
      2: anwsersArray[1],
      3: anwsersArray[2],
      4: anwsersArray[3],
      5: anwsersArray[4],
      6: anwsersArray[5],
      7: anwsersArray[6],
      8: anwsersArray[7],
      9: anwsersArray[8],
      10: anwsersArray[9],
      11: anwsersArray[10],
      12: anwsersArray[11],
      13: anwsersArray[12],
    })
  }

  goBack() {
    if (this.step > 1) {
      this.step--;
    }
  }

  goNext() {
    if (this.step < 4) {
      this.step++;
    }
  }

  async submit() {
    if (!this.form.valid) {
      this._snackbar.open('Preencha todos os campos.', 'OK', {
        duration: 5000
      });
      return;
    }

    try {
      // console.log(this.formatPayload());
      this.liaCreation ?
        await this.liaService.create(this.formatPayload()) :
        await this.liaService.update(this.liaId, this.formatPayload());
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

  private formatPayload(): any {
    const anwsersArray: any[] = [];
    console.log(this.form.value)
    Object.keys(this.form.value).forEach(key => {
      if (this.form.value[key] === 'Não' || this.form.value[key] === 'Sim') {
        anwsersArray.push(this.form.value[key]);
      }
    });
    return {
      id: this.lia?.id,
      inventoryName: this.form.value.inventoryName,
      dpoName: this.form.value.dpoName,
      justification: this.form.value.justification,
      answers: anwsersArray.join(","),
      updatedAt: this.lia?.updatedAt,
      createdAt: this.lia?.createdAt
    };
  }
}
