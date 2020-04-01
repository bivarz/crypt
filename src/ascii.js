function CC(str){

  for(var i=0; i<str.length; i++){
   
  }
  return str;
}
//["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


function idx(str){
 this.phrase = " ";
 var y = 10

 if(str === str.toLowerCase()){
   str = str.toUpperCase()
 }
 for (var i =0; i<str.length ; i++){
 var x = str[i].charCodeAt()
  letter = String.fromCharCode((x + 65 - y) % 26 + 65)
  console.log(letter.toLowerCase());
  for(letter of letter){
    var phrase =+ String.fromCharCode(letter)
  }
 }
 return phrase;
}
idx("zrz")
console.log(phrase);