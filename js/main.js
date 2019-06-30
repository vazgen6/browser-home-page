const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');

const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);

    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${amPm}`;
}

const addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '') + n;

const setBg = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2278543/pexels-photo-2278543.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#fff';
    }
}

const initName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

const setName = (e) => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

const initFocus = () => {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

const setFocus = (e) => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', (setName));
name.addEventListener('blur', (setName));

focus.addEventListener('keypress', (setFocus));
focus.addEventListener('blur', (setFocus));

setInterval(showTime, 1000);
setBg();
initName();
initFocus();