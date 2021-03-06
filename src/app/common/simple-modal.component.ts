import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'simple-modal',
  template: `
  <div bsModal #childModal="bs-modal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" (click)="childModal.hide()">
            <span>&times;</span>
          </button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" (click)="childModal.hide()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: boolean;

  @ViewChild('childModal') public childModal: ModalDirective;

  constructor() {
  }

  show() {
    this.childModal.show();
  }

  hide() {
    console.log('this.closeOnBodyClick ', this.closeOnBodyClick);
    if (this.closeOnBodyClick === true) {
      this.childModal.hide();
    }
  }
}
