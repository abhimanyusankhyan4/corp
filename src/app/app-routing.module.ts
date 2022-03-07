import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomatoComponent } from './tomato/tomato.component';

const routes: Routes =  [
  { path: '', component: TomatoComponent } ,
  { path: 'tomato', component: TomatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
