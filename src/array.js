
let alphaB = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


alphaDecripted = ['z','r','z','-','i','o','k','.',',r',',','i','y','e' ,'u','x','y','g','w','o','.','z','r','z','k','e','q','r','d','i' ,'l','i','z','r','z','k','d','e','b','o']

/*function cc (str){
  var solved= " ";
  for (var i=0; i<str.length; i++){
    var num= str[i].charCodeAt();
  }
}
*/




var letters = "PHPJWJYEAHVJYOUJKNOWJMEXJPHPAUGHTYJBYJPHPATURE".toLowerCase();
var re = /j/gi;
var reHifen =/w/
var reVirg = /v/gi
var reDot = /x/
var parsed = letters.normalize('NFD')
.replace(re,' ')
.replace(reHifen,"-")
.replace(reVirg, ',')
.replace(reDot, '.')

console.log(parsed);




/*let nArray = []

func = array.forEach(indice => {
  nArray.push(indexOf(array))
});
console.log(nArray)
*/

