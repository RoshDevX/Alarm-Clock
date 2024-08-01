function setAlarm() {
    const hours = document.getElementById("hours").value;
    const minutes = document.getElementById("minutes").value;
  
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      alert("Invalide time input. Please enter a valid time.")
      return
    }
  
  
    const alarmTime = new Date()
    alarmTime.setHours(hours)
    alarmTime.setMinutes(minutes)
    alarmTime.setSeconds(0)
  
    const currentTime = new Date()
    const timeDifference = alarmTime.getTime() - currentTime.getTime()
  
    if (timeDifference <= 0) {
      alert("The specified time is in the past. Please set a future time.");
      return;
    }
  
    setTimeout(() => {
      const alarmSound = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
      alarmSound.play()
    }, timeDifference)
  }