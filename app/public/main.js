
$(document).ready(function () {
	
	var professions = ['Mathematician', 'Computer Scientist', 'Logician', 'Cryptanalyst', 'Philospher'];

	var elem = document.getElementById('changingProfessions');

	var id = setInterval(frame, 1);
	var pos = 0;
	var counter = 0;
	const MAX = 400
	//var accel = 0;
  	
  	function frame() {
  		if (pos >= MAX){
  			counter ++;
  			if (counter == 5){
  				counter = 0;
  			}
  			elem.innerHTML = professions[counter];
  			pos = 0;
  		}
  		pos ++;
  		elem.style.marginLeft = pos/5 + "px"; 
  		if(pos < (MAX/2)){
  			elem.style.opacity = 1 * (pos/MAX); 
  		} else {
  			elem.style.opacity = 1 * (MAX/pos);
  		}
  		
      	
  	}

});

