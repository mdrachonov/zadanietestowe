class Timer {
    
    constructor(id1, id2) {
        self = this;
        
        self.idStart = document.getElementById(id1);
        self.idReset = document.getElementById(id2);
        
        self.idStart.onclick = self.start;
        self.idReset.onclick = self.resetTimer;
    }
    
    countDown() {
        self.s--;
        
        if (self.s < 0) {
            self.s = 59;
            self.m--;
        }
        
        if (self.m < 0) {
            self.m = 59;
        } 
        
        if (self.s + self.m == 0) {
            self.resetTimer();
        }
        
        self.s = self.s + "";
        self.m = self.m + "";
        
        if (self.s.length < 2) { 
            self.s = "0" + self.s;
        }
        
        if (self.m.length < 2) { 
            self.m = "0" + self.m;
        }
        
        document.getElementById("tm").innerHTML = self.m + ":" + self.s; 
    }    
       
    resetTimer(){             
            clearInterval(self.timerId);
            
            self.m = 0;
            self.s = 0;
            
            document.getElementById("tm").innerHTML = '00' + ':' + '00';
            document.getElementById("minutes").value = "";
            document.getElementById("minutes").removeAttribute("disabled", "");
            
            self.status = 0;
        }
   
    start(){   
        document.getElementById("minutes").setAttribute("disabled", "");
        
        self.m = +document.getElementById("minutes").value;
        self.s = 0;
        self.status = 0; 
        self.timerId;
          
        if(!self.status){
            self.status = 1;
            self.timerId = setInterval(self.countDown.bind(self), 1000);
        }
    }
}