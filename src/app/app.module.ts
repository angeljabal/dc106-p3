import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RndNumComponent } from './rnd-num/rnd-num.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    RndNumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
