import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input {background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent {

}
