import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing.module';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { WalkService } from '../walks/walk.service';

@NgModule({
  declarations: [
    NavigationComponent,
    LandingComponent
  ],
  imports: [
    SharedModule,
    RoutingModule
  ],
  exports: [
    NavigationComponent,
    LandingComponent
  ],
  providers: [
    WalkService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
