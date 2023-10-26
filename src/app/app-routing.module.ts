import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/components/layout/layout.component';
import { PerfilComponent } from './pages/components/perfil/perfil.component';

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
    path: 'perfil',
    redirectTo: '/perfil',
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
          },
        ]
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'fase',
        children: [
          {
            path: 'intermediaria',
            loadChildren: () => import('./pages/intermediario/intermediario.module').then(m => m.IntermediarioModule)
          },
        ]
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'fase',
        children: [
          {
            path: 'avancada',
            loadChildren: () => import('./pages/avancado/avancado.module').then(m => m.AvancadoModule)
          },
        ]
      }
    ]
  },
  {
    path: '',
    component: PerfilComponent ,
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: 'inicial',
            loadChildren: () => import('./pages/inicial/inicial.module').then(m => m.InicialModule)
          },
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
