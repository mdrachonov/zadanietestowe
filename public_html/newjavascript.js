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

class Timer {
    countDown() {
        this.s--;
        
        if (this.s < 0) { //sprawdza sekundy na dodatność
            this.s = 59;
            this.m--;
        }
        
        if (this.m < 0) { //sprawdza minuty na dodatność
            this.m = 59;
        } 
        
        if (this.s + this.m == 0) resetTimer();  //resetuje przy końcu odlicznia
        
        this.s = this.s + "";
        this.m = this.m + "";
        
        if (this.s.length < 2) { 
            this.s = "0" + this.s; //robi dwucyfrową liczbę sekund
        }
        
        if (this.m.length < 2) { 
            this.m = "0" + this.m; //robi dwucyfrową liczbę minut
        }
        
        document.getElementById('tm').innerHTML = this.m + ":" + this.s; 
    }    
       
    resetTimer(){             
            clearInterval(this.timerId);
            
            this.m = 0;
            this.s = 0;
            
            document.getElementById('tm').innerHTML = '00' + ':' + '00';
            document.getElementById("minutes").value = "";
            document.getElementById("minutes").removeAttribute("disabled","");
            
            this.status = 0;
        }
   
    start(){   
        document.getElementById("minutes").setAttribute("disabled","");
        
        this.m = +document.getElementById("minutes").value; //ustaliamy zmienne
        this.s = 0;
        this.status = 0; 
        this.timerId;
          
        if(!this.status){       //sprawdza status minutnika
            this.status = 1;
            this.timerId = setInterval(this.countDown.bind(this), 1000); //uruchamia minutnik
        }
    }
}

var timer = new Timer();