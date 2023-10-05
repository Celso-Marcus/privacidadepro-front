import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ]
})
export class ComponentsModule { }
