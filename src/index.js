const stateTime = {
    hours: null,
    minutes: null,
    seconds: null,
    textTime: null,
};
const setTimeState = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    stateTime.hours = hours < 10 ? `0${hours}` : hours;
    stateTime.minutes = minutes < 10 ? `0${minutes}` : minutes;
    stateTime.seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (hours > 6 && hours < 12) {
        stateTime.textTime = 'Good morning!';
    }
    if (hours > 12 && hours < 18) {
        stateTime.textTime = 'Good day!';
    }
    if (hours > 18 && hours < 0) {
        stateTime.textTime = 'Good evening!';
    }
    if (hours > 0 && hours < 6) {
        stateTime.textTime = 'Good night!';
    }
}
const setTime = () => {
    setTimeState();
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const timeDayElem = document.getElementById('timeDay');
    timeDayElem.textContent = stateTime.textTime;
    hoursElem.textContent = stateTime.hours;
    minutesElem.textContent = stateTime.minutes;
    secondsElem.textContent = stateTime.seconds;
    setTimeout(function updateTime () {
        setTimeState();
        timeDayElem.textContent = stateTime.textTime;
        hoursElem.textContent = stateTime.hours;
        minutesElem.textContent = stateTime.minutes;
        secondsElem.textContent = stateTime.seconds;
        setTimeout(updateTime, 1000)
    }, 1000);
};

setTime();
