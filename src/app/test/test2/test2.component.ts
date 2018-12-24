import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @ContentChild('contentChild') contentChild;

  constructor() { }

  ngOnInit() {
  }

}
