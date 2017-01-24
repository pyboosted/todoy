import { Component, OnInit } from '@angular/core';

require('./dashboard.component.less');

@Component({
  template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
  }

}
