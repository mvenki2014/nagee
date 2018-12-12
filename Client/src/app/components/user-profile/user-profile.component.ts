import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() books: any;
  constructor() { }

  ngOnInit() {
  }

}
