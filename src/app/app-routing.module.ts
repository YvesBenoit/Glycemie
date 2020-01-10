import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentsListComponent } from './aliments-list/aliments-list.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {path: '', component:AlimentsListComponent},
  {path: 'calcul', component:CalculatorComponent},
  {path: 'delete', component:CalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
