var score= 0;
var time= 60;

var timer = time.toString();
$('.timer').html(timer);


$( ".marcel" ).click(function() {
  $(".srdce").css({
  	height: 15 + "%"
  });
});

$( ".marek" ).click(function() {
  $(".srdce").css({
  	height: 6 + "%"
  });
});

$(".obrazok").on("click",function(){


	$(".nadpis, .obrazok").hide();
	$(".prva, .pismo, #myProgress, #myBar").show();

	
	setTimeout(spravToto(),3000);
	function spravToto() { $(".srdce").fadeIn(1000); };

	$(".srdce").on("click", function(){
	
	score++;	
	var num = score.toString();
	$('.body').html(num);

	if ( score > 5) {
	$(".dievca").hide();
	$(".druha").show();
	}

	if ( score > 10) {
	$(".dievca").hide();
	$(".tretia").show();
	}

	$(this).css({ top: Math.floor(Math.random() * 60) + 1 + '%', left: Math.floor(Math.random() * 60) + 1 + '%'});
	});


	function move() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 200);
	  function frame() {
	    if (width == 100) {
	      clearInterval(id);
	      $("#myProgress, #myBar, .srdce, .dievca, .pismo").hide();
	      $(".finish").show();
	    } else {
	      width++; 
	      elem.style.width = width + '%'; 
	    }
	  }
	};	
	move();

});



