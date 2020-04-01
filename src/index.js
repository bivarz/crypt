function cod10(str){
  var solved="";
  for(var i=0; i<str.length;i++){
    var asciiNum = str[i].charCodeAt();
    if(asciiNum>=65 && asciiNum <=113){
      solved += String.fromCharCode(asciiNum + 10);
    } else if (asciiNum >=114 && asciiNum<=122){
      solved += String.fromCharCode(asciiNum -10);
    }else{
      solved +=str[i]
    }
  }
  return solved;
}

cod10("")

