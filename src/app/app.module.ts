import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';

// Modules
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { WalksModule } from './walks/walks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    WalksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
