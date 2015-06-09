$("#face").click(function() {
	$("#img").animate({"marginLeft":"1500px"},500);
});
$("#roja").click(function() {
	$("#img").animate({"marginLeft":"0px"},500);
});


function MeFun (){
function fu (){
$("#imgface").attr({"src":"im/new_close.png"});
}

function fu2 (){
$("#imgface").attr({"src":"im/new.png"});
}

setTimeout(fu,1000);
setTimeout(fu2,1500);
}
setInterval(MeFun,7000);


$("#imgface").click(function(){
	function MyRandom (from, to) {
	return Math.floor((Math.random() * (to - from +1)) + from);
}
var mas = ["Каждый должен научится программировать!","Лекарство было горьким ","Надеюсь я не умру от рака","Лол","Я всего добился ","Смерть - самое главное изобретение жизни ","Остовайся голодным","Я бросил колледж !","Остовайся безрасудным","Мои папа и мама мне не родные ","Не когда не поздно исправится"];
var ran = MyRandom(0,10);
var rani = (mas[ran]);
	$("#ask").stop().animate({"opacity":"1"});
	$("#tre").stop().animate({"opacity":"1"});
	$("#ask p").text(rani);
	function MySet (){
		$("#ask").stop().animate({"opacity":"0"});
		$("#tre").stop().animate({"opacity":"0"});
	}
	setTimeout(MySet,2000);
});
  


// toggle 
jQuery.fn.toggle = function( fn, fn2 ) {
  // Don't mess with animation or css toggles
  if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
    return oldToggle.apply( this, arguments );
  }
  // migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
  // Save reference to arguments for access in closure
  var args = arguments,
  guid = fn.guid || jQuery.guid++,
  i = 0,
  toggler = function( event ) {
    // Figure out which function to execute
    var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
    jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
    // Make sure that clicks stop
    event.preventDefault();
    // and execute the function
    return args[ lastToggle ].apply( this, arguments ) || false;
  };
  // link all the functions, so any of them can unbind this click handler
  toggler.guid = guid;
  while ( i < args.length ) {
    args[ i++ ].guid = guid;
  }
  return this.click( toggler );
};
//конец

$("#headlogo").toggle(function(){
	$("#menu").animate({"marginTop":"0px"},100);
	
}, function(){
	$("#menu").animate({"marginTop":"-400px"},100);
	
});

$("#headlogo").hover(function(){
	$(this).animate({"opacity":"1"},70);
}, function(){
	$(this).animate({"opacity":"0.5"},70);
});

$("#minihead").click(function(){
       $("#minihead").animate({"opacity":"1"},200);
  $("#shapka").animate({"marginTop":"1px"},50);
  $("#shapka").attr({"src":"im/wiking.png"});
  $("#shapka").animate({"marginTop":"28px"},50);
       $("#minihead").animate({"opacity":"0.5"},200);
});


$("#minihead2").click(function(){
       $("#minihead2").animate({"opacity":"1"},200);
  $("#shapka").animate({"marginTop":"1px"},50);
  $("#shapka").attr({"src":"im/naruto.png"});
  $("#shapka").animate({"marginTop":"28px"},50);
       $("#minihead2").animate({"opacity":"0.5"},200);
});


$("#oskar").click(function(){
  alert($("#shapka").attr("src"));
});


$("#but").click(function(){
  $("#bg").css({"marginLeft":"-100%"});
  $("#bg").stop().animate({"marginLeft":"0%"},1000);
  $("#bg").css("backgroundImage", "url(im/bgr.jpg)");

});


$("#icon").click(function(){

  $("#bg").css({"marginLeft":"-100%"});
  $("#bg").stop().animate({"marginLeft":"0%"},1000);
  $("#bg").css("backgroundImage", "url(im/bgr.jpg)");
});

$("#icon").click(function(){
   $(this).stop().animate({"marginLeft":"50px"});
      setTimeout(fafa,300);
});
function fafa (){
  $("#icon").stop().animate({"marginLeft":"10px"});
}


$("#icon2").click(function(){
   $(this).stop().animate({"marginLeft":"50px"});
      setTimeout(fafa2,300);
});
function fafa2 (){
  $("#icon2").stop().animate({"marginLeft":"10px"});
}

$("#icon2").click(function(){

  $("#bg").css({"marginLeft":"-100%"});
  $("#bg").stop().animate({"marginLeft":"0%"},1000);
  $("#bg").css("backgroundImage", "url(im/fonbg2.png)");
});

$("#icon3").click(function(){
   $(this).stop().animate({"marginLeft":"50px"});
      setTimeout(fafa3,300);
});
function fafa3 (){
  $("#icon3").stop().animate({"marginLeft":"10px"});
}

$("#icon3").click(function(){

  $("#bg").css({"marginLeft":"-100%"});
  $("#bg").stop().animate({"marginLeft":"0%"},1000);
  $("#bg").css("backgroundImage", "url(im/fonbg3.png)");
});

$("#icon4").click(function(){
   $(this).stop().animate({"marginLeft":"50px"});
      setTimeout(fafa4,300);
});
function fafa4 (){
  $("#icon4").stop().animate({"marginLeft":"10px"});
}

$("#icon4").click(function(){

  $("#bg").css({"marginLeft":"-100%"});
  $("#bg").stop().animate({"marginLeft":"0%"},1000);
  $("#bg").css("backgroundImage", "url(im/fonbg4.png)");
});

// $("#icon").toggle(function(){
//     $("#icon").animate({"width":"170px");
// }, function(){
//     $("#icon").animate({"width":"150px");
// });






/*$("#minihead").hover(function(){
  $("#minihead").animate({"opacity":"1"});
}, function(){
  $("#minihead").animate({"opacity":"0.5"});
});*/

/*$("#minihead2").hover(function(){
  $("#minihead").stop().animate({"opacity":"1"});
}, function(){
  $("#minihead").animate({"opacity":"0.5"});
});*/



//$("#img").animate({"marginLeft":"1500px"},500);





