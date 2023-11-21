import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediarioComponent } from './intermediario.component'
import { IntermediarioChecklistTiComponent } from './intermediario-checklist-ti/intermediario-checklist-ti.component'
import { IntermediarioCookiesComponent } from './intermediario-cookies/intermediario-cookies.component'
import { IntermediarioLiaComponent } from './intermediario-lia/intermediario-lia.component'
import { IntermediarioRIPDComponent } from './intermediario-ripd/intermediario-ripd.component'
import { IntermediarioTermoDeUsoComponent } from './intermediario-termo-de-uso/intermediario-termo-de-uso.component'
import { ChecklistTiControleDeAcessoComponent } from './intermediario-checklist-ti/checklist-ti-controle-de-acesso/checklist-ti-controle-de-acesso.component';

const routes: Routes = [
  {
    path: '',
    component: IntermediarioComponent,
    children: [
      {
        path: 'checklist-ti',
        component: IntermediarioChecklistTiComponent
      },
      {
        path: 'checklist-ti/controle-de-acesso',
        component: ChecklistTiControleDeAcessoComponent
      },
      {
        path: 'cookies',
        component: IntermediarioCookiesComponent
      },
      {
        path: 'lia',
        component: IntermediarioLiaComponent
      },
      {
        path: 'ripd',
        component: IntermediarioRIPDComponent
      },
      {
        path: 'termo-de-uso',
        component: IntermediarioTermoDeUsoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediarioRouteRoutingModule { }
