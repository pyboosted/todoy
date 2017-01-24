import { Component, OnInit } from '@angular/core';

require('./create.component.less');

@Component({
  template: require('./create.component.html')
})
export class CreateComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
  }

}
