import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private is_open: boolean;
  constructor() {
    this.is_open = false;
  }

  toggleSetting() {
    if(this.isOpen()) {
      this.is_open = false;
    } else {
      this.is_open = true;
    }
  }

  isOpen():boolean {
    return this.is_open;
  }

  ngOnInit() {
  }

}
