import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ComponentsModule } from '../components/components.module';
import { InicialRouteRoutingModule } from './inicial-route-routing.module';
import { InicialQuizLpgdComponent } from './inicial-quiz-lpgd/inicial-quiz-lpgd.component';
import { InicialDpoComponent } from './inicial-dpo/inicial-dpo.component';
import { InicialSetorComponent } from './inicial-setor/inicial-setor.component';
import { InicialInventarioComponent } from './inicial-inventario/inicial-inventario.component';



@NgModule({
  declarations: [
    InicialQuizLpgdComponent,
    InicialDpoComponent,
    InicialSetorComponent,
    InicialInventarioComponent
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
