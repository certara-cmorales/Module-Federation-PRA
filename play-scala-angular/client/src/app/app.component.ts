import {Component, OnDestroy, OnInit} from '@angular/core';
import {WindowEventBridgeService} from "./services/window-event-bridge.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'client';

  constructor(private bridge: WindowEventBridgeService) {}

  ngOnInit() {
    // start listening events from other apps
    this.bridge.start();
  }

  ngOnDestroy() {
    // stop listening events from other apps
    this.bridge.stop();
  }

}
