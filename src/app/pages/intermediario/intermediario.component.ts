import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intermediario',
  templateUrl: './intermediario.component.html',
  styleUrls: ['./intermediario.component.scss']
})
export class IntermediarioComponent {
  constructor(
    public router: Router,
    ){}
}
