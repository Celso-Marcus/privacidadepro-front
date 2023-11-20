import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { REASON_DATA } from 'src/app/core/constants/inventory';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { InventoryService } from 'src/app/core/services/http/inventory.service';

@Component({
  selector: 'app-inventario-criar-editar',
  templateUrl: './inventario-criar-editar.component.html',
  styleUrls: ['./inventario-criar-editar.component.scss']
})
export class InventarioCriarEditarComponent implements OnInit {

  @Input()
  inventoryCreation!: boolean;

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
    if(!this.inventoryCreation && this.inventory){
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
      controller: inventory.controller,
    })
  }

  goBack() {
    if (this.step > 1) {
      this.step--;
    }
  }

  goNext() {
    if (this.step < 3) {
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
      this.inventoryCreation ?
        await this.inventoryService.create(this.form.value) :
        await this.inventoryService.update(this.inventoryId, this.form.value);
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
    return `${sectorName}-Inventário-${this.inventorySize}`
  }
}
