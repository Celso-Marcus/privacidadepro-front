import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvancadoComponent } from './avancado.component'
import { AvancadoComunicacaoTitularComponent } from './avancado-comunicacao-titular/avancado-comunicacao-titular.component'
import { AvancadoIncidentesComponent } from './avancado-incidentes/avancado-incidentes.component'
import { AvancadoPoliticaSegurancaComponent } from './avancado-politica-seguranca/avancado-politica-seguranca.component'
import { AvancadoPrivacyByDesignComponent } from './avancado-privacy-by-design/avancado-privacy-by-design.component'

const routes: Routes = [
  {
    path: '',
    component: AvancadoComponent,
    children: [
      {
        path: 'comunicacao-com-titular',
        component: AvancadoComunicacaoTitularComponent
      },
      {
        path: 'incidentes',
        component: AvancadoIncidentesComponent
      },
      {
        path: 'politica-de-seguranca',
        component: AvancadoPoliticaSegurancaComponent
      },
      {
        path: 'privacy-by-design',
        component: AvancadoPrivacyByDesignComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvancadoRouteRoutingModule { }
