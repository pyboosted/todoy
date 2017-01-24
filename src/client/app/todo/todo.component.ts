import { Component, OnInit } from '@angular/core';

require('./todo.component.less');

@Component({
  template: require('./todo.component.html'),
})
export class TodoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


}
