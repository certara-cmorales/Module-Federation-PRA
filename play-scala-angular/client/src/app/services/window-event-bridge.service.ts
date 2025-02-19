import { Injectable } from '@angular/core';

enum MFE {
  HOST = 'MFE_HOST',
  REMOTE = 'MFE_REMOTE'
}

@Injectable({
  providedIn: 'root'
})
export class WindowEventBridgeService {
  private listeners: any = {};

  constructor() { }

  start() {
    window.addEventListener(MFE.REMOTE, this.eventHandler);
  }

  stop() {
    window.removeEventListener(MFE.REMOTE, this.eventHandler);
  }

  subscribe(id: string, listener: Function) {
    this.listeners[id] = listener;
  }

  unsubscribe(id: string) {
    delete this.listeners[id];
  }

  dispatch(detail: any): void {
    const event = new CustomEvent(MFE.HOST, {detail});
    window.dispatchEvent(event);
  }

  private eventHandler = (event: any): void => {
    const {detail} = (event as CustomEvent);
    const actions: Function[] = Object.values(this.listeners);
    if (detail && actions.length > 0) {
      actions.forEach((action: Function) => action(detail));
    }
  }

}
