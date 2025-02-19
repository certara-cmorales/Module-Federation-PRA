import {Component, OnDestroy, OnInit} from '@angular/core';
import {WindowEventBridgeService} from "../../services/window-event-bridge.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit, OnDestroy{
  public message: string = '';

  constructor(private bridge: WindowEventBridgeService) {}

  ngOnInit() {
    // subscribe to events from other apps
    this.bridge.subscribe('notifications',this.updateMessage);
  }

  ngOnDestroy() {
    // unsubscribe from events of other apps
    this.bridge.unsubscribe('notifications');
  }

  private updateMessage = (msg: string): void => {
    this.message = msg;
  }

}
