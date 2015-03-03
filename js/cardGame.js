var windowWidth = $(window).width();

randomNum = new Array('assets/one.jpg','assets/two.jpg','assets/three.jpg','assets/four.jpg','assets/five.jpg','assets/six.jpg','assets/seven.jpg','assets/eight.jpg','assets/one.jpg','assets/two.jpg','assets/three.jpg','assets/four.jpg','assets/five.jpg','assets/six.jpg','assets/seven.jpg','assets/eight.jpg');
setArray = new Array();
// for(i=-14;i<=randomNum.length;i++){
	// var x = Math.floor(Math.random()*randomNum.length);
	
	 //alert(randomNum.length);
	// alert(x);
	// var nextObject = randomNum[x];
	//alert(nextObject);
	// setArray.push(nextObject);
	// //alert(randomNum[x]);
	// randomNum.splice(x,1);//still not going below 9
// //alert(randomNum[x]);	
// }
// for(i=0;i<=1;i++){
	// var x = 4;
	// alert(randomNum[x]);
	// randomNum.splice(x,1);
	// alert(randomNum[x]);
// }
while(randomNum.length>0){
	var x = Math.floor(Math.random()*randomNum.length);
	setArray.push(randomNum[x]);
	randomNum.splice(x,1);		
}

var slot1 = setArray[0];
var slot2 = setArray[1];
var slot3 = setArray[2];
var slot4 = setArray[3];
var slot5 = setArray[4];
var slot6 = setArray[5];
var slot7 = setArray[6];
var slot8 = setArray[7];
var slot9 = setArray[8];
var slot10 = setArray[9];
var slot11 = setArray[10];
var slot12 = setArray[11];
var slot13 = setArray[12];
var slot14 = setArray[13];
var slot15 = setArray[14];
var slot16 = setArray[15];

function properties(){
	$("#properties").css('visibility','visible');
}

function propertiesOff(){
	$("#properties").css('visibility','hidden');
}

function checkMatch(e){
	
}

$(document).ready(function(){
	
	var cardWidth = $(".card").width();
	if(windowWidth<=1600 && windowWidth>=901){
		var newMargin = (windowWidth/4-cardWidth)/2;
		$(".card").css("margin-left",newMargin);
	}else if(windowWidth<=900){
		var newMargin = (windowWidth/2-cardWidth)/2;
		$(".card").css("margin-left",newMargin);
	}
	
	$("#deck").click(function(){properties();});
	$("#optionHolder p").click(function(){propertiesOff();});
	$("#optionHolder img:eq(2)").click(function(){
		$(".card img").attr('src','assets/HK.jpg');
	});
	$("#optionHolder img:eq(1)").click(function(){
		$(".card img").attr('src','assets/sheldon.jpg');
	});
	$("#optionHolder img:eq(0)").click(function(){
		$(".card img").attr('src','assets/AviatorRed.jpg');
	});
	
	
	// $("#cardOne").click(function(){
		// var booleanValue = $("#cardOne img").attr('alt');
		// if(booleanValue == '0'){
		// checkMatch(slot1);
		// $("#cardOne img").attr('src',slot1).attr('alt','1');
		// }else if(booleanValue == '1'){
			// $("#cardOne img").attr('src','assets/sheldon.jpg').attr('alt','0');
		// }
// 		
// 		
// 		
		// });
		
		$("#cardOne").on('click',function(){
			$('img' ,this).attr('src',
			function (i,oldSrc){
				return oldSrc == 'assets/sheldon.jpg'?slot1:'assets/sheldon.jpg';
			});
			// $("# cardOne img").toggle("fast",function(){$("this").attr('src',slot1);
		// });
		alert(oldSrc);
		});
		
	$("#cardTwo").click(function(){
		var booleanValue = $("#cardTwo img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardTwo img").attr('src',slot2).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardTwo img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardThree").click(function(){
		var booleanValue = $("#cardThree img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardThree img").attr('src',slot3).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardThree img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardFour").click(function(){
		var booleanValue = $("#cardFour img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardFour img").attr('src',slot4).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardFour img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
		$("#cardFive").click(function(){
		var booleanValue = $("#cardFive img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardFive img").attr('src',slot5).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardFive img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardSix").click(function(){
		var booleanValue = $("#cardSix img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardSix img").attr('src',slot6).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardSix img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardSeven").click(function(){
		var booleanValue = $("#cardSeven img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardSeven img").attr('src',slot7).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardSeven img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardEight").click(function(){
		var booleanValue = $("#cardEight img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardEight img").attr('src',slot8).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardEight img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
		$("#cardNine").click(function(){
		var booleanValue = $("#cardNine img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardNine img").attr('src',slot9).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardNine img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardTen").click(function(){
		var booleanValue = $("#cardTen img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardTen img").attr('src',slot10).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardTen img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardEleven").click(function(){
		var booleanValue = $("#cardEleven img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardEleven img").attr('src',slot11).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardEleven img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardTwelve").click(function(){
		var booleanValue = $("#cardTwelve img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardTwelve img").attr('src',slot12).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardTwelve img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
		$("#cardThirteen").click(function(){
		var booleanValue = $("#cardThirteen img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardThirteen img").attr('src',slot13).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardThirteen img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardFourteen").click(function(){
		var booleanValue = $("#cardFourteen img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardFourteen img").attr('src',slot14).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardFourteen img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardFifteen").click(function(){
		var booleanValue = $("#cardFifteen img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardFifteen img").attr('src',slot15).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardFifteen img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
	$("#cardSixteen").click(function(){
		var booleanValue = $("#cardSixteen img").attr('alt');
		if(booleanValue == '0'){
		
		$("#cardSixteen img").attr('src',slot16).attr('alt','1');
		}else if(booleanValue == '1'){
			$("#cardSixteen img").attr('src','assets/sheldon.jpg').attr('alt','0');
		}
		
		});
		
		
});
