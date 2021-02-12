import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { SingleAdViewComponent } from './views/single-ad-view/single-ad-view.component';

const routes: Routes = [
  {path: '', component: HomepageViewComponent },
  {path: 'ad/:id', component: SingleAdViewComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
