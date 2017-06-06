import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleDetailClick(eventName) {
    console.log('handle click ==>', eventName);
    this.toastrService.success(eventName);
  }
}
