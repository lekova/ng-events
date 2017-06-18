import { Component, Input, OnChanges } from '@angular/core';
import { ISession} from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ?
        this.visibleSessions.sort(sortByNameAsc) :
        this.visibleSessions.sort(sortByVotersDesc);
    }
  }

  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0); // makes clean copy of the array
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1;
  if(s1.name < s2.name) return -1;
  return 0;
};


function sortByVotersDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
};
