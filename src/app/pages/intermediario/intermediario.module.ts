import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ComponentsModule } from '../components/components.module';
import { IntermediarioRouteRoutingModule } from './intermediario-route-routing.module';
import { IntermediarioComponent } from './intermediario.component'
import { IntermediarioChecklistTiComponent } from './intermediario-checklist-ti/intermediario-checklist-ti.component'
import { IntermediarioCookiesComponent } from './intermediario-cookies/intermediario-cookies.component'
import { IntermediarioLiaComponent } from './intermediario-lia/intermediario-lia.component'
import { IntermediarioRIPDComponent } from './intermediario-ripd/intermediario-ripd.component'
import { IntermediarioTermoDeUsoComponent } from './intermediario-termo-de-uso/intermediario-termo-de-uso.component'



@NgModule({
  declarations: [
    IntermediarioChecklistTiComponent,
    IntermediarioComponent,
    IntermediarioCookiesComponent,
    IntermediarioLiaComponent,
    IntermediarioRIPDComponent,
    IntermediarioTermoDeUsoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    IntermediarioRouteRoutingModule,
  ]
})
export class IntermediarioModule { }
