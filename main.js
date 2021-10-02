array=[]
function submit() {
n1=document.getElementById("name1").value
n2=document.getElementById("name2").value
n3=document.getElementById("name3").value
n4=document.getElementById("name4").value
array.push(n1)
array.push(n2)
array.push(n3)
array.push(n4)
document.getElementById("display").innerHTML=array
document.getElementById("sub").style.display="none"
document.getElementById("sor").style.display="inline-block"
}
function sorting() {
   array.sort()
   document.getElementById("display").innerHTML=array
}