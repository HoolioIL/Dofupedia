import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/home/start/start.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: StartComponent
      },
      {
        path: 'clases',
        component: ClasesComponent
      },
      {
        path: 'equipamentos',
        component: EquipmentsComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DofusRoutingModule { }
