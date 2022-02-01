

const instruments=document.querySelectorAll(".drum")

instruments.forEach((drum) => {

   drum.addEventListener('click', () => {

      let drumType=drum.classList[0]

      buttonAnimation(drumType)

      switch(drumType){
         case 'w':{
               var audio=new Audio("./sounds/crash.mp3");
               audio.play();
               break
         }
         case 'a':{
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break
         }
         case 's':{
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break
         }
         case 'd':{
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break
         }
         case 'j':{
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break
         }
         case 'k':{
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break
         }
         case 'l':{
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break
         }
      }
   })


   
})

addEventListener("keypress",(e) =>{
   let keyy=e.key
   buttonAnimation(keyy)
   switch(keyy){
      case 'w':{
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break
      }
      case 'a':{
         var audio=new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break
      }
      case 's':{
         var audio=new Audio("./sounds/snare.mp3");
         audio.play();
         break
      }
      case 'd':{
         var audio=new Audio("./sounds/tom-1.mp3");
         audio.play();
         break
      }
      case 'j':{
         var audio=new Audio("./sounds/tom-2.mp3");
         audio.play();
         break
      }
      case 'k':{
         var audio=new Audio("./sounds/tom-3.mp3");
         audio.play();
         break
      }
      case 'l':{
         var audio=new Audio("./sounds/tom-4.mp3");
         audio.play();
         break
      }
   }
})

function buttonAnimation(currentKey){

   let par=currentKey + " drum"
   instruments.forEach((drum) => {
      if(drum.className == par){
         drum.classList.toggle("pressed")
         setTimeout(() =>{
            drum.classList.remove("pressed")
         },500)
      }
   })
}

 