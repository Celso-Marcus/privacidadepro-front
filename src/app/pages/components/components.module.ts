import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { PerfilComponent } from './perfil/perfil.component';
import { IntermediarioComponent } from './intermediario/intermediario.component';
import { IntermediarioTermoDeUsoComponent } from './intermediario/intermediario-termo-de-uso/intermediario-termo-de-uso.component';
import { IntermediarioChecklistTiComponent } from './intermediario/intermediario-checklist-ti/intermediario-checklist-ti.component';
import { IntermediarioCookiesComponent } from './intermediario/intermediario-cookies/intermediario-cookies.component';
import { IntermediarioRIPDComponent } from './intermediario/intermediario-ripd/intermediario-ripd.component';
import { IntermediarioLiaComponent } from './intermediario/intermediario-lia/intermediario-lia.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    PerfilComponent,
    IntermediarioComponent,
    IntermediarioTermoDeUsoComponent,
    IntermediarioChecklistTiComponent,
    IntermediarioCookiesComponent,
    IntermediarioRIPDComponent,
    IntermediarioLiaComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
  ]
})
export class ComponentsModule { }
