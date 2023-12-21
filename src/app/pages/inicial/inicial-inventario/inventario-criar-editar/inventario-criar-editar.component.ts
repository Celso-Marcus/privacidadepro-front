import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { REASON_DATA } from 'src/app/core/constants/inventory';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { InventoryService } from 'src/app/core/services/http/inventory.service';
import * as underscore from 'underscore';

@Component({
  selector: 'app-inventario-criar-editar',
  templateUrl: './inventario-criar-editar.component.html',
  styleUrls: ['./inventario-criar-editar.component.scss']
})
export class InventarioCriarEditarComponent implements OnInit {

  @Input()
  isCreate!: boolean;

  @Input()
  inventory: Inventory | undefined;

  @Input()
  inventorySize: number | undefined;

  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

  step: number = 1;

  reasonData: string[] = REASON_DATA;

  inventoryId!: number;

  initialForm = {
    tagName: ['', [Validators.required]],
    sector: ['', [Validators.required]],
    collectedData: ['', [Validators.required]],
    sourceData: ['', [Validators.required]],
    reasonData: ['', [Validators.required]],
    howStorage: ['', [Validators.required]],
    securityData: ['', [Validators.required]],
    deadlineData: ['', [Validators.required]],
    justificationData: ['', [Validators.required]],
    underAgeData: [false, [Validators.required]],
    foreignData: ['Nenhum', [Validators.required]],
    shareData: ['Nenhum', [Validators.required]],
    operators: ['', [Validators.required]],
    systemNames: ['', [Validators.required]],
    dpoName: ['', [Validators.required]],
    sensitiveData: [''],
    controller: ['', [Validators.required]],
  }

  constructor(
    private readonly inventoryService: InventoryService,
    private formBuilder: NonNullableFormBuilder,
    private _snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    if(!this.isCreate && this.inventory){
      this.inventoryId = Number(this.inventory.id);
      this.fillForm(this.inventory);
    }
  }

  fillForm(inventory: Inventory) {
    this.form.patchValue({
      tagName: inventory.tagName,
      sector: inventory.sector,
      collectedData: inventory.collectedData,
      sourceData: inventory.sourceData,
      reasonData: inventory.reasonData,
      howStorage: inventory.howStorage,
      securityData: inventory.securityData,
      deadlineData: inventory.deadlineData,
      justificationData: inventory.justificationData,
      underAgeData: inventory.underAgeData,
      sensitiveData: inventory.sensitiveData,
      foreignData: inventory.foreignData,
      shareData: inventory.shareData,
      operators: inventory.operators.join(','),
      systemNames: inventory.systemNames.join(','),
      dpoName: inventory.dpoName,
      controller: inventory.controller,
    })
  }

  goBack() {
    if (this.step > 1) {
      this.step--;
    }
  }

  goNext() {
    if (this.step < 5) {
      this.step++;
    }
  }

  async submit() {
    const formValue = underscore.clone(this.form.value);
    formValue.operators = formValue.operators.split(',');
    formValue.systemNames = formValue.systemNames.split(',');

    if (!this.form.valid) {
      this._snackbar.open('Preencha todos os campos.', 'OK', {
        duration: 5000
      });
      return;
    }

    try {
      this.isCreate ?
        await this.inventoryService.create(formValue) :
        await this.inventoryService.update(this.inventoryId, formValue);
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

  changeSector(event: any) {
    this.form.patchValue({
      tagName: this.generateInventoryTagName(event),
    })
  }

  private generateInventoryTagName(sectorName: number) {
    if(this.isCreate){
      return `${sectorName}-Inventário-${this.inventorySize}`
    }
    const sizePart = this.inventory?.tagName.split('-')[2];
    return `${sectorName}-Inventário-${sizePart}`
  }
}
