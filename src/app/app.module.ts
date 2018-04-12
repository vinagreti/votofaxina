import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PoliticListModule } from './shared/components/politic/politic-list/politic-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoliticListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
