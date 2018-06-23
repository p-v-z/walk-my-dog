import { NgModule } from '@angular/core';
import { RoutingModule } from '../routing.module';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { WalkService } from '../walks/walk.service';

import { WalksComponent } from './walks.component';

@NgModule({
  declarations: [
    WalksComponent
  ],
  imports: [
    RoutingModule
  ],
  exports: [
    WalksComponent,
  ],
  providers: [
    WalkService,
    DataStorageService,
    AuthService
  ]
})
export class WalksModule {}
