import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(private authService: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm): ISession[] {
    return this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
