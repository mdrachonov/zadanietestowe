    function T(){
        s -= 1;
        
        if(s < 0) s=59,m-=1;
        
        if(m < 0) m=59; 
        
        
        if(s + m == 0)T3()  
        
        s = s + "";
        m = m + "";
        
        if (s.length < 2) s = "0" + s;
        
        if (m.length < 2) m = "0" + m;
        
        tm.innerHTML = m + ":" + s; 
    }    
    
    function Start(){
        window.m = +document.getElementById('minutes').value;
        window.s = 00;
        window.r = 0; 
        window.tt = 0;
        
        document.getElementById("minutes").setAttribute("disabled","");
          
        if(!r){
            r = 1;
            T2()
        }
    }
    
    function T2() {
        
        if( s + m == 0)s = 00,m = 00;
        
        tt = setInterval("T()",1000);
    }           
    
    function T3(){      
        
            clearInterval(tt);
            
            tm.innerHTML = '00' + ':' + '00';
            document.getElementById("minutes").value = "";
            document.getElementById("minutes").removeAttribute("disabled","");
            
            r = 0;
        }