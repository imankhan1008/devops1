// show a live clock and a click handler
function showTime() {
const el = document.getElementById('time');
const now = new Date();
el.textContent = 'Current time: ' + now.toLocaleTimeString();
}


setInterval(showTime, 1000);
showTime();


document.getElementById('helloBtn').addEventListener('click', function() {
alert('Hello from JavaScript!');
});