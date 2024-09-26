document.addEventListener('DOMContentLoaded', () => {
    const hourHand = document.querySelector('.hand:nth-child(1)');
    const minuteHand = document.querySelector('.hand:nth-child(2)');
    const secondHand = document.querySelector('.hand:nth-child(3)');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDeg = (seconds / 60) * 360 + 90;
        const minutesDeg = (minutes / 60) * 360 + 90;
        const hoursDeg = (hours % 12 / 12) * 360 + 90;

        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // initial call to set the clock immediately
});

