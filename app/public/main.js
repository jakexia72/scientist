
$(document).ready(function () {
        
    

	//Animated description of turing's porfessions
	var professions = ['Mathematician', 'Inventor', 'Computer Scientist', 'Logician', 'Cryptanalyst', 'Philospher'];
	var elem = document.getElementById('changingProfessions');
	var id = setInterval(frame, 1);
	var pos = 0;
	var counter = 0;
	const MAX = 100;
	var transitionRegion = MAX / 8;

  	function frame() {
  		if (pos >= MAX){
  			counter ++;
  			if (counter >= professions.length){
  				counter = 0;
  			}
  			elem.innerHTML = professions[counter];
  			pos = 0;
  		}
  		pos += 0.25;
  		elem.style.marginLeft = pos/5 + "px"; 

  		if(pos < transitionRegion){
  			elem.style.opacity = Math.pow(pos,1.01) / transitionRegion;
  		} else if (pos > transitionRegion * 3) {
  			elem.style.opacity = Math.pow(MAX - pos,1.01) / transitionRegion;
  		}	
  	}

	
	var bg = document.getElementById('bigBlue');
	var rm = document.getElementById('toBeRemoved');
  	function exitMainPage(){
  		//bg.style.width = '5000px';
  		
  		bg.classList.remove('col-sm-5');
  		rm.classList.remove('col-sm-7');
  		
  		//document.getElementById("toBeRemoved").remove();
  		rm.style.width = "0px";
  		bg.style.width = "100%";
  		document.getElementById("mButtonWrapper").remove();
  		//bg.style.height = "50%";

  		document.getElementById("firstRow").style.height = "30%";
  		document.getElementById('secondPage').style.display = "block";
        
        //AOS.refresh();
	

  	}
	document.getElementById("mainButton").onclick = function() {exitMainPage()};

    $(document).on('scroll', function() {
        if($(this).scrollTop()>=$('#refreshAOS').position().top){
        AOS.init({once:true}); // remove '{once:true}' for continuous animation
        AOS.refresh();
        AOS.refreshHard();
        //AOS.once = true;
    }
    });

    

});

