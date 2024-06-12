import { Injectable } from '@angular/core';
import { TimerConfig } from './timer-config';
import { refreshInterval } from './timer-utils';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private intervalId: any;

  startTimer(config: TimerConfig) {
    this.intervalId = refreshInterval(config);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
