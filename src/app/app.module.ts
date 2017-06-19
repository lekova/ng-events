import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './shared/event.service';
import { AuthService } from './user/auth.service';
import { DurationPipe } from './shared/duration.pipe';
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { EventRouteActivator } from './shared/event-route-activator.service';
import { EventListResolver } from './shared/event-list-resolver.service';
import { appRoutes } from './app.routes';

declare const toastr: Toastr;
declare const jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved event, do you really want to cancel?');
  }
  return true;
}
