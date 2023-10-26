import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ComponentsModule } from '../components/components.module';
import { AvancadoRouteRoutingModule } from './avancado-route-routing.module';
import { AvancadoComponent } from './avancado.component'
import { AvancadoComunicacaoTitularComponent } from './avancado-comunicacao-titular/avancado-comunicacao-titular.component'
import { AvancadoIncidentesComponent } from './avancado-incidentes/avancado-incidentes.component'
import { AvancadoPoliticaSegurancaComponent } from './avancado-politica-seguranca/avancado-politica-seguranca.component'
import { AvancadoPrivacyByDesignComponent } from './avancado-privacy-by-design/avancado-privacy-by-design.component'


@NgModule({
  declarations: [
    AvancadoComponent,
    AvancadoComunicacaoTitularComponent,
    AvancadoIncidentesComponent,
    AvancadoPoliticaSegurancaComponent,
    AvancadoPrivacyByDesignComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    AvancadoRouteRoutingModule,
  ]
})
export class AvancadoModule { }
