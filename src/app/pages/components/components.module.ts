import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    PerfilComponent,
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
