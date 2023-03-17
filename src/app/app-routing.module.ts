import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

const routes: Routes = [

  // les routes vers les composants
  { path: 'list', component: ListEquipesComponent },
  { path: 'add', component: AddEquipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
