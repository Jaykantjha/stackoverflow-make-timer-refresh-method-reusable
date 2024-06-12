import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div>
    <h1>Countdown Timer</h1>
    <p>{{ indicativeExchangeRate }}</p>
    <p>Refresh Counter: {{ refreshCounter }}</p>
  </div>
  `,
})
export class App implements OnInit {
  indicativeExchangeRate: string = '';
  refreshCounter: number = 30;
  maxRefreshes: number = 4;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerService.startTimer({
      startCounter: this.refreshCounter,
      intervalDuration: 1000, // 1 second
      maxRefreshes: this.maxRefreshes,
      onCountdown: (counter: number) => {
        this.refreshCounter = counter;
        this.indicativeExchangeRate = `Rate: 1 USD = ${counter} EUR | Refresh in ${counter} seconds`;
      },
      refreshServiceCall: () => {
        console.log('Service call executed');
      },
      onMaxRefreshesReached: () => {
        console.log('Max refreshes reached');
      }
    });
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();
  }
}

bootstrapApplication(App);
