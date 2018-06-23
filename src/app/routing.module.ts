import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Components
import { LandingComponent } from './core/landing/landing.component';
import { WalksComponent } from './walks/walks.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'walks', component: WalksComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
