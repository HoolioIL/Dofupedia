import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './pages/clases/clases.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { PetsComponent } from './pages/pets/pets.component';
import { HomeComponent } from './pages/home/home.component';
import { ClassShowComponent } from './pages/class-show/class-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'clases',
        component: ClasesComponent
      },
      {
        path: 'equipamientos',
        component: EquipmentsComponent
      },
      {
        path: 'armas',
        component: WeaponsComponent
      },
      {
        path: 'mascotas',
        component: PetsComponent
      },
      {
        path: 'clase/:id',
        component: ClassShowComponent
      },
      {
        path: '**',
        redirectTo: 'clases'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DofusRoutingModule { }
