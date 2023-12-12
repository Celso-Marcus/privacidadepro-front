import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ControleAcessoDialogComponent } from './dialogs/controle-acesso-dialog/controle-acesso-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    PerfilComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    ControleAcessoDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    ControleAcessoDialogComponent
  ]
})
export class ComponentsModule { }
