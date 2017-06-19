import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';
import { SimpleModalComponent } from '../common/index';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  @ViewChild('childModal') childModal: SimpleModalComponent;

  constructor(private authService: AuthService,
    private eventService: EventService,
    private viewContainerRef: ViewContainerRef) {

    console.log('ctor => viewContainerRef ', viewContainerRef);
    console.log('childModal', this.childModal);
     }

  searchSessions(searchTerm): ISession[] {
    return this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
