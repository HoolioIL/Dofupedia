import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { DofusRoutingModule } from './dofus-routing.module';
import { ClasesComponent } from './pages/clases/clases.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { PetsComponent } from './pages/pets/pets.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasesComponent,
    EquipmentsComponent,
    PetsComponent,
    WeaponsComponent,
    HomeComponent,
    ItemTableComponent,
    LoadingComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    DofusRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    TitleCasePipe
  ]
})
export class DofusModule { }
