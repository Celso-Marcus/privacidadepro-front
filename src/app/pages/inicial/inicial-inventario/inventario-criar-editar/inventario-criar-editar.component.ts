import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { REASON_DATA } from 'src/app/core/constants/inventory';
import { Inventory } from 'src/app/core/interfaces/inventory.interface';
import { Sector } from 'src/app/core/interfaces/sector.interface';
import { InventoryService } from 'src/app/core/services/http/inventory.service';
import { SectorService } from 'src/app/core/services/http/sector.service';

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

  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

  step: number = 1;

  sectorOptions!: Sector[];

  reasonData: string[] = REASON_DATA;

  initialForm = {
    tagName: ['', [Validators.required]],
    sector: ['', [Validators.required]],
    colletedData: ['', [Validators.required]],
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
    private readonly sectorService: SectorService,
    private readonly inventoryService: InventoryService,
    private formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private _snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    if(!this.inventoryCreation && this.inventory){
      this.fillForm(this.inventory);
    }
    this.sectorOptions = this.sectorService.getAll();
  }

  fillForm(inventory: Inventory) {
    this.form.patchValue({
      tagName: inventory.tagName,
      sector: inventory.sector,
      colletedData: inventory.colletedData,
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
      // ERROR Message
    }

    this.inventoryCreation ?
      await this.inventoryService.create(this.form.value) :
      await this.inventoryService.update(this.inventory!.id, this.form.value);

    this.router.navigate(['/inicial/inventario']);
  }

  changeSector(event: any) {
    this.form.patchValue({
      tagName: this.generateInventoryTagName(event),
    })
  }

  private generateInventoryTagName(sectorId: number) {
    const sectorName = this.sectorOptions.find(x => x.id == sectorId);
    return `${sectorName?.name}-Inventário-${this.sectorOptions.length + 1}`
  }
}
