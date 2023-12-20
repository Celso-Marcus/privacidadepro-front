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
import { ChecklistEvidenceUpload } from '../intermediario/intermediario-checklist-ti/dialog/evidencias-upload/upload-evidencias.component';
import { UploadFileDialogComponent } from '../inicial/inicial-entrevistas/upload-dialog/upload-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    PerfilComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    ChecklistEvidenceUpload,
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
    ChecklistEvidenceUpload,
  ]
})
export class ComponentsModule { }
