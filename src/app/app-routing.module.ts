import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcComponent } from './calc/calc.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'calc', component: CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
