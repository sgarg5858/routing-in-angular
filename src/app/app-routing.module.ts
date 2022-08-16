import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defer, delay } from 'rxjs';

const routes: Routes = [
  {
    path:'lazy',
    loadChildren:()=>defer(()=>import('./lazy/lazy.module').then(m=>m.LazyModule)).pipe(delay(2500))
  },
  {
    path:'test',
    loadComponent:()=>defer(()=>import('./test/test.component').then((comp)=>comp.TestComponent)).pipe(delay(2500))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
