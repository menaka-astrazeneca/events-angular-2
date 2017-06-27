import { Component, OnInit } from '@angular/core';
import { EventService } from "events/shared/event.service";
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from "events/shared/index";

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'name'

  constructor(private eventService: EventService, 
              private route: ActivatedRoute) {
                  
               }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}