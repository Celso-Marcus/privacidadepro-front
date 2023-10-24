import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Sector } from 'src/app/core/interfaces/sector.interface';
import { SectorService } from 'src/app/core/services/http/sector.service';
@Component({
  selector: 'app-inicial-setor',
  templateUrl: './inicial-setor.component.html',
  styleUrls: ['./inicial-setor.component.scss']
})
export class InicialSetorComponent implements OnInit {
  floatLabelControl = 'always' as FloatLabelType;

  form!: FormGroup;

  sectorOptions!: Sector[];

  initialForm = {
    tagName: ['', [Validators.required]]
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    this.sectorOptions = this.sectorService.getAll();
  }

  constructor(
    private readonly sectorService: SectorService,
    private formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private _snackbar: MatSnackBar,
  ){
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
