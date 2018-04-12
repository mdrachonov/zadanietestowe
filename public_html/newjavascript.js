class startTime {
    constructor(){
            this.count();
    }
    count(){
            var date = new Date();

            this.h = date.getHours();
            this.m = date.getMinutes(); 
            this.s = date.getSeconds();

            this.m = this.checkTime(this.m); 
            this.s = this.checkTime(this.s); 

            document.getElementById('clock').innerHTML = this.h + ":" + this.m + ":" + this.s; 

            this.t = setTimeout(this.count.bind(this), 500);
    }

    checkTime(i) {
            if (i < 10) i = "0" + i;

            return i;
    }
}
var Clock = new startTime();
