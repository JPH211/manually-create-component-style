import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParagraphListComponent } from './paragraph-list/paragraph-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphListComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
