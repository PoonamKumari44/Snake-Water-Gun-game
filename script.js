alert("lets start!")
let user=prompt("enter S,W or G")
let cpuI=Math.floor(Math.random()*3);
let cpu=["S","W","G"][cpuI]

const match=(cpu,user)=>{
  if(cpu===user){
    return "nobody"
  }
  else if(cpu==="S" && user==="W"){
    return "cpu"
  }
  else if(cpu==="S" && user==="G"){
    return "user"
  }
  else if(cpu==="G" && user==="W"){
    return "user"
  }
  else if(cpu==="G" && user==="S"){
    return "cpu"
  }
  else if(cpu==="W" && user==="S"){
    return "user"
  }
  else if(cpu==="W" && user==="G"){
    return "cpu"
  }
  else{
    return "invalid input"
  }
}
let result=match(cpu,user)
document.write(`CPU:${cpu} <br> User:${user}<br>The Winner is: ${result}`)
// document.getElementById("score").innerHTML="Your score is: "+score+"/"+n;
document.getElementById.style.border="2px solid blue";