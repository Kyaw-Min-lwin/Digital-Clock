function clock(display) {
    let arr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    setInterval(function () {
        // changes 1 dight into 2 digits by adding a 0 in front 2 -> 02
        let pad = function (a) {
            a = a + '';
            return a.length === 2 ? a : '0' + a;
        }

        let currentTime = new Date();
        let split = 'PM';
        let hour = currentTime.getHours();
        hour > 12 ? hour -= 12 : split = 'AM';

        display.textContent = `${pad(hour)} : ${pad(currentTime.getMinutes())} : ${pad(currentTime.getSeconds())} ${split}`;

        // changes current day color to aqua
        document.querySelector(`span.${arr[currentTime.getDay()]}`).style.color = 'aqua';
    }, 1000)
}

window.onload = function () {
    let display = document.querySelector('#time');
    clock(display);
}
