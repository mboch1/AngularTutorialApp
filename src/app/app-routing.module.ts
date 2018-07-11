import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GomeComponent } from './gome/gome.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: GomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
