import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DofusRoutingModule } from './dofus-routing.module';
import { ClasesComponent } from './pages/clases/clases.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { PetsComponent } from './pages/pets/pets.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemTableComponent } from './components/item-table/item-table.component';


@NgModule({
  declarations: [
    ClasesComponent,
    EquipmentsComponent,
    PetsComponent,
    WeaponsComponent,
    HomeComponent,
    ItemTableComponent,
  ],
  imports: [
    CommonModule,
    DofusRoutingModule,
    SharedModule
  ]
})
export class DofusModule { }
