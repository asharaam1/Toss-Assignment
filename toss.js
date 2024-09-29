console.log("hello world");


var result = document.querySelector(".result");
var img=document.querySelector("img");

var Num; 

function game(btn){

  Num=Math.ceil(Math.random(Num)*2);


  if(Num===1 && btn===1 || Num===2 && btn===2){
    result.innerHTML="Congrats! ☺ You won the Toss ☺"
  }
  else{
    result.innerHTML="You lost the Toss";
  }


  if(Num===1){
    result.innerHTML+=`<br/>Its a 5 Rupee`
  }
  else if(Num===2){
    result.innerHTML+=`<br/>Its a Chand`
  }


  if(Num===1){
    img.src="https://i.ebayimg.com/images/g/9-0AAOSw8LFhoOxs/s-l1200.jpg" ;
  }
  else if(Num===2){
    img.src="https://en.numista.com/catalogue/photos/pakistan/66863f4a6a38f8.71235127-original.jpg" ;
  }


}

// Completed program