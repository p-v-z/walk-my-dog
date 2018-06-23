import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Components
import { LandingComponent } from './core/landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
