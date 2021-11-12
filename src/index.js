const stateTime = {
    hours: null,
    minutes: null,
    seconds: null,
};
const updateTime = () => {
    setTimeout(() => {
        const date = new Date();
        stateTime.hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        stateTime.minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        stateTime.seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        const hoursElem = document.getElementById('hours');
        const minutesElem = document.getElementById('minutes');
        const secondsElem = document.getElementById('seconds');
        hoursElem.textContent = stateTime.hours;
        minutesElem.textContent = stateTime.minutes;
        secondsElem.textContent = stateTime.seconds;
        updateTime();
    }, 1000);
};

updateTime();
