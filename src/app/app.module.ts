import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionsModule } from './sessions/sessions.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SessionsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
