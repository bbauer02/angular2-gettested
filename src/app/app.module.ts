import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionCardComponent } from './sessions/session-card/session-card.component';
import { BorderCardDirective } from './border-card.directive';
import { TagColorPipe } from './tag-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SessionsListComponent,
    SessionCardComponent,
    BorderCardDirective,
    TagColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
