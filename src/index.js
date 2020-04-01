function caesarCypher(str,num){
 let lowerCaseStr =str.toLowerCase();
 let alphaB = 'abcdefghijklmnopqrstuvwyz'.split(' ');
 let newStr = ' ';

 console.log(alphaB)

 for(var i =0; i<lowerCaseStr.length; i++){
   var currentLetter = lowerCaseStr[i];
   if(currentLetter === ' '){
     newStr += currentLetter;
     continue;
   }
   var currentIndex =alphaB.indexOf(currentLetter);
   var newIndex = currentIndex + num;
   if(newIndex > 25) newIndex = newIndex -26;
   if(newIndex < 0) newIndex = newIndex +26;
  /* if(str[i]===str[i].toUpperCase()){
     newStr += alphaB[newIndex].toUpperCase();
   }
   else newStr += alphaB[newIndex];
  */}
 return newStr;
}

console.log(caesarCypher("zrz - iokr, iye uxyg wo. zrzkeqrdi li zrzkdebo",10))

