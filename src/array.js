
let alphaB = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


alphaDecripted = ['z','r','z','-','i','o','k','.',',r',',','i','y','e' ,'u','x','y','g','w','o','.','z','r','z','k','e','q','r','d','i' ,'l','i','z','r','z','k','d','e','b','o']


 for(letter of alphaDecripted){
  this.letter
  string= letter
  idx = alphaB.indexOf(string)
  sum = (10 - idx) % 26;
  if(sum < 0 ){
  nSum = sum*(-1)
  console.log(nSum)
}
console.log(idx);
console.log(alphaB[nSum])

}











/*let nArray = []

func = array.forEach(indice => {
  nArray.push(indexOf(array))
});
console.log(nArray)
*/

