import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <router-outlet #outlet="outlet"></router-outlet>`,
})
export class AppComponent {
}
