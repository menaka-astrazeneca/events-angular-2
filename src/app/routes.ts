import { CreateSessionComponent } from 'events/event-details/create-session/create-session.component';
import { Routes } from "@angular/router/router";
import { CreateEventComponent } from "events/create-event/create-event.component";
import { EventsListComponent } from "events/events-list/events-list.component";
import { EventListResolver } from "events/events-list-resolver.service";
import { EventDetailsComponent } from "events/event-details/event-details.component";
import { EventRouteActivator } from "events/event-details/event-route-activator.service";
import { Error404Component } from "errors/error404/error404.component";

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]  },
    { path: 'events/session/new', component: CreateSessionComponent  },
    { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'user/user.module#UserModule'}
]