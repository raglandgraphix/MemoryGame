var currentDeckCheck = localStorage.getItem('currentDeck');
var currentHigh = localStorage.getItem('gameHigh');
if(currentHigh!=null){
	var highScore = currentHigh;
}else{
	var highScore = 0;
};
if(currentDeckCheck ===null){
	var deck = 'assets/AviatorRed.jpg';
}else{
	var deck = currentDeckCheck;
};
//Option to change the deck to a different design
function changeDeck(value){
	$(".card img").attr('src',value);
	localStorage.setItem('currentDeck',value);
};
randomNum = new Array('assets/pennyCard.jpg','assets/amyCard.jpg','assets/bernCard.jpg','assets/priaCard.jpg','assets/leonardCard.jpg','assets/rajCard.jpg','assets/howardCard.jpg','assets/sheldonCard.jpg','assets/pennyCard.jpg','assets/amyCard.jpg','assets/bernCard.jpg','assets/priaCard.jpg','assets/leonardCard.jpg','assets/rajCard.jpg','assets/howardCard.jpg','assets/sheldonCard.jpg');
setArray = new Array();
//var i=0;
//var randLen = randomNum.length;
while(randomNum.length>0){
	/*the math.random gives a random number then is multiplied by the length of the array. the value of 
	that is rounded down with the Math.floor.*/
	var x = Math.floor(Math.random()*randomNum.length);
	var nextObject = randomNum[x];			//the result of "x" is the index of the randomNum array and becomes the value for nextObject.
	setArray.push(nextObject);				//this  pushes the variable of nextObject into the empty array above.
	randomNum.splice(x,1);					//this removes the value for the index above so it can't be used again.
}
// $.each(setArray,function(i,val){
	// var slot = 'slot'+(i+1);
	// var slot = val;
// });
function properties(){
	$("#properties").css('visibility','visible');
}
function propertiesOff(){
	$("#properties").css('visibility','hidden');
	location.reload();
}
$(document).ready(function(){
	var headerHeight = $("header").height();
	var statusBarHeight = $("#statusBar").height();
	var boardHeight = windowHeight-headerHeight-statusBarHeight;
	var cardHeight = (boardHeight/4)*.9;
	var holderWidth = (cardHeight*.715)*4+60;
	var al = windowWidth/8-20;
	var al2 = windowWidth/4-20;	
	if(windowWidth>=1300){
		$("#cardsHolder").css({
	 		'width':'100%',
	 		'height':boardHeight
	 	});
	 	$(".card").css({
	 		'height':al/.715,
	 		'width':al,
	 		
	 		//background:'blue'
	 	});
	 	
	 	
	 
	 }else if(windowWidth<=1299){
	 	
	 	 $(".card").css({
		 'height':cardHeight,
	 		'width':cardHeight*.715,
	});
	 $("#cardsHolder").css({
	 	'width':(cardHeight*.715)*4+60,
	 	'height':boardHeight
	 });
	 }

	$("#optionHolder h5").on('click',function(){
		localStorage.gameHigh.clear();
	});
	$(".card img").attr('src',deck);
	$("#highScore span").html(highScore);
	var score = 20;
	loveCount = 0;
	function increaseScore(amount){
		alert(amount);
		score = score+amount;
		
	}
	var cardWidth = $(".card").width();					//card spacing and sizing
	
	$("#deck").click(function(){properties();});
	$("#optionHolder p").click(function(){propertiesOff();});
	$("#optionHolder img:eq(2)").click(function(){
		changeDeck('assets/HK.jpg');
	});
	$("#optionHolder img:eq(1)").click(function(){
		changeDeck('assets/sheldon.jpg');
	});
	$("#optionHolder img:eq(0)").click(function(){
		changeDeck('assets/AviatorRed.jpg');
	});
	var counter = 0;
	var gcCount =0;
		function cardRunner(papa,location){			
			var image = $("#"+papa+" img").attr('src');
			var Yheight = $('#'+papa+'').height();
		
//This runs and flips the card		
		//$('#'+papa+' img').css('height',cardHeight);
			 $("#"+papa+" img").animate({'width':'1px'},200,function(){$(this).attr('src',function(newImg){
				if(image==deck){
					return newImg=setArray[location];
				}else if (image=='assets/GenericCard.jpg'){
				}else{
					score = score-1;
					$("#score span").html(score);
					return newImg =deck;					
				}
				
				});}).queue(function(papa){$(this).animate({'width':'100%'},200,function(papa){
					finishMe(papa);
				}
					
				).dequeue();});
// this is were the flip ends
		function finishMe(){	
		var cardUp = $("#"+papa+" img").attr('src');
		
		var x = "assets/GenericCard.jpg";
		if(cardUp==x){alert('This Card is out of play');}else{
		var cardFlip = $("#"+papa+" img").attr('src');	
		$(".card").not("#"+papa+"").each(function(){ //ghghghghghghghghghghghghgh
			var b = $(this).attr('id');			
			var a = $("#"+b+ " img").attr('src');
			if(a==='assets/GenericCard.jpg'){				
			}
			if(a==deck||a=='assets/GenericCard.jpg'){	
				//left blank so nothing happens	
				
			 }else if(a=='assets/pennyCard.jpg' && cardFlip=='assets/leonardCard.jpg' || a=='assets/leonardCard.jpg' && cardFlip=='assets/pennyCard.jpg'){
				if(loveCount==0){
				alert('Lovers Points Awarded');
				score=score+15;
				 $("#score span").html(score);
				$("#"+b+ " img").attr('src',deck);
				$("#"+papa+" img").attr('src',deck);
				loveCount++;
			}else{
				alert('Sorry, That wasn\'t a match');
			 	$("#"+b+ " img").attr('src',deck);
				$("#"+papa+" img").attr('src',deck);
			 	score = score-2;
			  $("#score span").html(score);
			  if(score<=0){
			  	alert('Game Over');
			  	window.location.reload();
			  	
			  }
			}
			}else if(a=='assets/priaCard.jpg' && cardFlip=='assets/leonardCard.jpg'|| a=='assets/leonardCard.jpg' && cardFlip=='assets/priaCard.jpg'){
				alert('Hot Chick Alert Gain 30 points.');
				$("#"+b+ " img").attr('src',deck);
				$("#"+papa+" img").attr('src',deck);
				score = score+30;
				 $("#score span").html(score);
				if(score<=0){
					alert('You Lose');
					propertiesOff();
					
				}
				
				
			 }
			 else if(a=='assets/priaCard.jpg' && cardFlip=='assets/pennyCard.jpg'|| a=='assets/pennyCard.jpg' && cardFlip=='assets/priaCard.jpg'){
				alert('He belongs to me. FIGHT lose 30 points.');
				$("#"+b+ " img").attr('src',deck);
				$("#"+papa+" img").attr('src',deck);
				score = score-30;
				 $("#score span").html(score);
				if(score<=0){
					alert('You Lose');
					propertiesOff();
					
				}
				
				
			 }else if(a!=cardFlip){
				alert('Sorry, That wasn\'t a match');
			 	$("#"+b+ " img").attr('src',deck);
				$("#"+papa+" img").attr('src',deck);
			 	score = score-2;
			  $("#score span").html(score);
			  if(score<1){
			  	
			  	alert('You Lose');
			  	propertiesOff();
			  }
			}else{
				var audio = new Audio('assets/Bazinga.mp3');
				audio.play();
				
				  $("#"+b+ " img").attr('src','assets/GenericCard.jpg');
				 $("#"+papa+" img").attr('src','assets/GenericCard.jpg');
				 score=score+10;
				 gcCount++;
				 if(gcCount==8){
				 	if(score>highScore){
				 		localStorage.gameHigh=score;
				 	}
				 	var audio1 = new Audio('assets/crazy.mp3');
				audio1.play();
				 	alert('You have finished');
				 	window.location.reload();
				 }
				  $("#score span").html(score);
			}
			
		});

		}
		}
	};
	
	
	$("#score span").html(score);
		$("#cardOne").on('click',function(){
			
			//$(this).toggleClass('cardFront','addOrRemove');
			cardRunner('cardOne',0);
			
			// flip('cardOne');
			
			
		});
	
	$("#cardTwo").on('click',function(){
			
		cardRunner('cardTwo',1);
	} );
	
	$("#cardThree").on('click',function(){
		cardRunner('cardThree',2);
		
	} );
	$("#cardFour").on('click',function(){
		var me = $(this).attr('id');
		cardRunner('cardFour',3);
	} );
	$("#cardFive").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,4);
	} );
	$("#cardSix").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,5);
	} );
	$("#cardSeven").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,6);
	} );
	$("#cardEight").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,7);
	} );
	$("#cardNine").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,8);
	} );
	$("#cardTen").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,9);
	} );
	$("#cardEleven").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,10);
	} );
	$("#cardTwelve").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,11);
	} );
	$("#cardThirteen").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,12);
	} );
	$("#cardFourteen").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,13);
	} );
	$("#cardFifteen").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,14);
	} );
	$("#cardSixteen").on('click',function(){
		var me = $(this).attr('id');
		cardRunner(me,15);
	} );
	
	
	$(window).on("resize", resizeWin);
	
	function resizeWin(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
		var headerHeight = $("header").height();
	var statusBarHeight = $("#statusBar").height();
	var boardHeight = windowHeight-headerHeight-statusBarHeight;
	var cardHeight = (boardHeight/4)*.9;
	var holderWidth = (cardHeight*.715)*4+60;
	//$(".card img").height(cardHeight);
	//alert(windowWidth);
	var al = windowWidth/8-20;
	var al2 = windowWidth/4-20;
	if(windowWidth>=1300){
		$("#cardsHolder").css({
	 		'width':'100%',
	 		'height':boardHeight
	 	});
	 	$(".card").css({
	 		'height':al/.715,
	 		'width':al,
	 		
	 		//background:'blue'
	 	});
	 	
	 	
	 
	 }else if(windowWidth<=1299){
	 	
	 	 $(".card").css({
		 'height':cardHeight,
	 		'width':cardHeight*.715,
	});
	 $("#cardsHolder").css({
	 	'width':(cardHeight*.715)*4+60,
	 	'height':boardHeight
	 });
	 }
	}
});
