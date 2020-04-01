
var frase ="zrz - iokr, iye uxyg wo. zrzkeqrdi li zrzkdebo"

function idx(str,num){
  var letters = " ";
  var y = num
 
  if(str === str.toLowerCase()){
    str = str.toUpperCase()
  }
  for (var i =0; i<str.length ; i++){
  var x = str[i].charCodeAt()
  
   letters += String.fromCharCode((x + 65 - y) % 26 + 65)
   //console.log(letters.toLowerCase());
}

  var re = /j/gi
  var reVirg = /v/gi
  var reDot = /x/gi

 
  return letters.normalize('NFD').replace(re,' ').replace("W","-")
  .replace(reVirg, ',')
  .replace(reDot, '.').toLowerCase()
   
 
  }

 idx(frase,10)
