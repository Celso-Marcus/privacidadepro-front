import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fase/inicial',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/fase/inicial',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'fase',
        children: [
          {
            path: 'inicial',
            loadChildren: () => import('./pages/inicial/inicial.module').then(m => m.InicialModule)
          }
        ]
      }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
