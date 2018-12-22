import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '@app/animations';
@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppViewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
