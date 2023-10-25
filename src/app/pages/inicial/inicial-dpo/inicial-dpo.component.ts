import { SectorService } from './../../../core/services/http/sector.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Sector } from 'src/app/core/interfaces/sector.interface';

@Component({
  selector: 'app-inicial-dpo',
  templateUrl: './inicial-dpo.component.html',
  styleUrls: ['./inicial-dpo.component.scss']
})
export class InicialDpoComponent {
  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

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

  private generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
}
