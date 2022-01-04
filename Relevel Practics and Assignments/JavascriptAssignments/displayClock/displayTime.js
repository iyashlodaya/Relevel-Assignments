setInterval(displayTime, 1000);

function displayTime () {
    let time = new Date();

    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    hh = hh < 10 ? "0"+ hh : hh;
    mm = mm < 10 ? "0"+ mm : mm;
    ss = ss < 10 ? "0"+ ss : ss;


    document.getElementById('clock').innerText = `${hh}:${mm}:${ss}`;
}

displayTime();