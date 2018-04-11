function startTime() {
    var date = new Date();
    
    var h = date.getHours(); //pobiera godziny
    var m = date.getMinutes(); //pobiera minuty
    var s = date.getSeconds(); //pobiera sekundy
    
    m = checkTime(m); //robi minuty dwucyfrowymi
    s = checkTime(s); //robi secundy dwucyfrowymi

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s; //wypisuje czas
    
    t = setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) i = "0" + i;
    
    return i;
}