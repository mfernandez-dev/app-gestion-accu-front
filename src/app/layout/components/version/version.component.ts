import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  public version = '0.1.0-ALPHA';

  constructor() { }

  ngOnInit(): void {
  }

}
