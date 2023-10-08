import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { BorderCardDirective } from './border-card.directive';
import { TagColorPipe } from './tag-color.pipe';

@NgModule({
  declarations: [
    SessionsListComponent,
    SessionCardComponent,
    BorderCardDirective,
    TagColorPipe
  ],
  imports: [
    CommonModule,

  ], 
  exports: [
    SessionsListComponent
  ]
})
export class SessionsModule { }
