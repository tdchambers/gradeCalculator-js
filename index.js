//("Travis First")
let i = 0
var Travis =[2,3,4,5,6,7,9]
/*for (i== 0; i<Travis.length; i ++){
  Travis[i] = 2
}*/
//(Travis)
////(Travis.length)
function displayResult() {
    document.getElementById("title").innerHTML = "Have a nice day!";
}
function displayG1(){
  var g1Val = document.getElementById("G1").value
  var g2Val = document.getElementById("G2").value
  var g3Val = document.getElementById("G3").value
  var g4Val = document.getElementById("G4").value
  //weights
  var w1Val = document.getElementById("W1").value
  var w2Val = document.getElementById("W2").value
  var w3Val = document.getElementById("W3").value
  var w4Val = document.getElementById("W4").value

  var product = g1Val * g2Val * g3Val * g4Val
  //alert(product)
  var totalWeights  =  parseInt(w1Val) + parseInt(w2Val) + parseInt(w3Val) + parseInt(w4Val)
  //alert(totalWeights)
  var answer = ((g1Val*w1Val) + (g2Val*w2Val)
  								+ (g3Val*w3Val) + (g4Val*w4Val))
                  /(totalWeights)
  alert(answer.toFixed(2))
  document.getElementsByID("percentOut").innertext = answer.toFixed(2)

}


function binarySearch(arr, inty){
let n = Math.floor(arr.length / 2)
let start = 0 , end = arr.length
//(end)

////(n)
//(inty)
while (start <= end){
  let mid = Math.floor((end + start)/2)
  //(mid)
  //(" jkgklsjkldf " )
if (arr[mid] === inty) {
  ////("LEAVING")
  return true }
 else if (inty > arr[mid]){
   ////(arr[mid] & "its greatr")
   start = mid+1

 }else {
   end = mid -1
  // //(arr[mid] & "its lessr")

 }




}
}
if (binarySearch(Travis,10) === true){
  console.log("found")
}else {
  console.log("notfound")}
