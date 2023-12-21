import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  INICIAL_LINKS = [
    { routerLink: ['fase/inicial/quiz-lgpd'], label: 'Quiz LGPD' },
    { routerLink: ['fase/inicial/entrevistas'], label: 'Entrevistas' },
    { routerLink: ['fase/inicial/inventario'], label: 'Inventários' }
  ];

  INTERMEDIARIA_LINKS = [
    { routerLink: ['fase/intermediaria/checklist'], label: 'Checklist' },
    { routerLink: ['fase/intermediaria/lia'], label: 'LIA' },
  ];

  AVANCADO_LINKS = [
    { routerLink: ['fase/avancada/incidentes'], label: 'Incidentes' },
    { routerLink: ['fase/avancada/ripd'], label: 'RIPD' },
    { routerLink: ['fase/avancada/treinamentos-guias'], label: 'Treinamentos e Guias' }
  ]

  modules = [
    {
      name: 'Inicial',
      links: this.INICIAL_LINKS
    },
    {
      name: 'Intermediária',
      links: this.INTERMEDIARIA_LINKS
    },
    {
      name: 'Avançado',
      links: this.AVANCADO_LINKS
    },
  ]



}
