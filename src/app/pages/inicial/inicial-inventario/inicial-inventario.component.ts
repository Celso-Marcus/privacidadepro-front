import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-inicial-inventario',
  templateUrl: './inicial-inventario.component.html',
  styleUrls: ['./inicial-inventario.component.scss']
})
export class InicialInventarioComponent {
  floatLabelControl = 'always' as FloatLabelType;
}
