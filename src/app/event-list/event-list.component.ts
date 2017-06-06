import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../shared/toastr.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleDetailClick(eventName) {
    console.log('handle click ==>', eventName);
    this.toastrService.success(eventName);
  }
}
