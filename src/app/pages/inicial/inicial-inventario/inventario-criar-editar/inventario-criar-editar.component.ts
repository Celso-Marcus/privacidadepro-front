import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Sector } from 'src/app/core/interfaces/sector.interface';
import { SectorService } from 'src/app/core/services/http/sector.service';

@Component({
  selector: 'app-inventario-criar-editar',
  templateUrl: './inventario-criar-editar.component.html',
  styleUrls: ['./inventario-criar-editar.component.scss']
})
export class InventarioCriarEditarComponent {


  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

  step: number = 1;

  sectorOptions!: Sector[];

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
    sensitiveData: ['', [Validators.required]],
    controller: ['', [Validators.required]],
  }

  constructor(
    private readonly sectorService: SectorService,
    private formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private _snackbar: MatSnackBar,
  ){
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    this.sectorOptions = this.sectorService.getAll();
  }


  goBack(){

  }

  goNext(){

  }

  submit(){

  }

}
