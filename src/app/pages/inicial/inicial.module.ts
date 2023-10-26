import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ComponentsModule } from '../components/components.module';
import { InicialRouteRoutingModule } from './inicial-route-routing.module';
import { InicialQuizLpgdComponent } from './inicial-quiz-lpgd/inicial-quiz-lpgd.component';
import { InicialInventarioComponent } from './inicial-inventario/inicial-inventario.component';
import { InventarioCriarEditarComponent } from './inicial-inventario/inventario-criar-editar/inventario-criar-editar.component';
import { InicialCriarQuizLpgdComponent } from './inicial-quiz-lpgd/inicial-criar-quiz-lpgd/inicial-criar-quiz-lpgd.component';



@NgModule({
  declarations: [
    InicialQuizLpgdComponent,
    InicialInventarioComponent,
    InventarioCriarEditarComponent,
    InicialCriarQuizLpgdComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    InicialRouteRoutingModule,
  ]
})
export class InicialModule { }
