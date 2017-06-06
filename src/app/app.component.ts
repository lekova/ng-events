import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-nav-bar></app-nav-bar>
      <!-- <app-event-list></app-event-list>-->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
}
