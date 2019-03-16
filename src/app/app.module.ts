import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { TopImageComponent } from './card/top-image/top-image.component';
import { BottomImageComponent } from './card/bottom-image/bottom-image.component';
import { InfoComponent } from './card/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    TopImageComponent,
    BottomImageComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
