import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
declare function _init(): any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat = -73.9874068;
  lng = 40.643180;

  constructor() { }

  ngOnInit(): void {
    _init();
  }

}
