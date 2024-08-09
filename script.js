


function datetime(){
  let date = new Date()
  let hr  = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()


    document.getElementById('hours').innerHTML = zeroelement(hr);
    document.getElementById('mins').innerHTML = zeroelement(min);
    document.getElementById('seconds').innerHTML = zeroelement(sec);
   
      if(hr<12)
        document.getElementById('ampm').innerHTML = "AM"
      else
        document.getElementById('ampm').innerHTML = "PM"
    }

    let great = hrs => {
      
      let date = new Date()
      let hr  = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSeconds()

      if( hr>=0 && hr<12)
        document.getElementById('greetings').innerHTML = "GOOD MORNING";
      else if ( hr>=12 && hr<=17)
        document.getElementById('greetings').innerHTML = "GOOD AFTERNOON";
      else
      document.getElementById('greetings').innerHTML = "GOOD EVENING";

    }
    setInterval(great,500)

  

  function zeroelement(num){
        return num<10?"0"+num : num;
      
  }

  setInterval(datetime,500)