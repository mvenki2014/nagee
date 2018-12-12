import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent implements OnInit {
  @Input() books: any;
  constructor() { }

  ngOnInit() {
  }

}
