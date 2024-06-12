import { TimerConfig } from "./timer-config";

export function refreshInterval(config: TimerConfig) {
    const {
      startCounter = 30,
      intervalDuration = 1000,
      maxRefreshes = 4,
      onCountdown = () => {},
      onMaxRefreshesReached = () => {},
      refreshServiceCall = () => {}
    } = config;
  
    let currentCounter = startCounter;
    let refreshCount = 0;
  
    const intervalId = setInterval(() => {
      onCountdown(currentCounter);
  
      if (currentCounter === 0) {
        refreshServiceCall();
  
        refreshCount++;
        currentCounter = startCounter;
  
        if (refreshCount >= maxRefreshes) {
          clearInterval(intervalId);
          onMaxRefreshesReached();
        }
      } else {
        currentCounter--;
      }
    }, intervalDuration);
  
    return intervalId;
  }
  