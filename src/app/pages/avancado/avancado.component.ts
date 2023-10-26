import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.component.html',
  styleUrls: ['./avancado.component.scss']
})
export class AvancadoComponent {
  constructor(
    public router: Router,
    ){}
}
