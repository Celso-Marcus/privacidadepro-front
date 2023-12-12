import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial.component';
import { InicialQuizLpgdComponent } from './inicial-quiz-lpgd/inicial-quiz-lpgd.component';
import { InicialInventarioComponent } from './inicial-inventario/inicial-inventario.component';
import { InicialEvidenciasComponent } from './inicial-evidencias/inicial-evidencias.component';

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
        path: 'inventario',
        component: InicialInventarioComponent
      },
      {
        path: 'evidencias',
        component: InicialEvidenciasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRouteRoutingModule { }
