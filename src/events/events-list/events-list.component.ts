import { EventService } from './../shared/event.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "events/shared/index";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[]

  constructor(private eventService: EventService, private toastr: ToastsManager, private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
