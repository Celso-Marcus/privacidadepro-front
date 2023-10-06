import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial.component';
import { InicialQuizLpgdComponent } from './inicial-quiz-lpgd/inicial-quiz-lpgd.component';
import { InicialDpoComponent } from './inicial-dpo/inicial-dpo.component';
import { InicialSetorComponent } from './inicial-setor/inicial-setor.component';
import { InicialInventarioComponent } from './inicial-inventario/inicial-inventario.component';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent,
    children: [
      {
        path: 'quiz-lgpd',
        component: InicialQuizLpgdComponent
      },
      {
        path: 'dpo',
        component: InicialDpoComponent
      },
      {
        path: 'setor',
        component: InicialSetorComponent
      },
      {
        path: 'inventario',
        component: InicialInventarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRouteRoutingModule { }
