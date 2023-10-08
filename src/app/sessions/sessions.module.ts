import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { BorderCardDirective } from './border-card.directive';
import { TagColorPipe } from './tag-color.pipe';

import { Routes, RouterModule } from '@angular/router';
import { SessionDetailComponent } from './session-detail/session-detail.component';

const sessionRoutes: Routes = [
  { path: '', component: SessionsListComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/:id', component: SessionDetailComponent }

];

@NgModule({
  declarations: [
    SessionsListComponent,
    SessionCardComponent,
    BorderCardDirective,
    TagColorPipe,
    SessionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(sessionRoutes)
  ], 
  exports: [
    SessionsListComponent,
    RouterModule
  ]
})
export class SessionsModule { }
