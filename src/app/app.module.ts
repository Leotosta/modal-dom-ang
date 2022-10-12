import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuerDataComponent } from './component/issuer-data/issuer-data.component';
import { BalanceComponent } from './component/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuerDataComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
