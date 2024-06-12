export interface TimerConfig {
    startCounter?: number;
    intervalDuration?: number;
    maxRefreshes?: number;
    onCountdown?: (counter: number) => void;
    onMaxRefreshesReached?: () => void;
    refreshServiceCall?: () => void;
  }
  