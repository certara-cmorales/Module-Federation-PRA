import { Component } from '@angular/core';
import {WindowEventBridgeService} from "../../services/window-event-bridge.service";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.sass']
})
export class ActionsComponent {
  constructor(private bridge: WindowEventBridgeService) {}

  public sendMessage(): void {
    // dispatch event to other apps
    this.bridge.dispatch('Window event dispatched from Angular');
  }
}
