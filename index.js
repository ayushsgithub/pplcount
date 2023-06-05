

let count = 0;
function increment() {
  // console.log("Button Clicked")
  let c = document.getElementById("count")
  count = count + 1;
  c.innerText = count;
  console.log(count)
}
function decrement(){
    if(count>0){
        let d = document.getElementById("count")
    count -= 1
    d.innerText = count;
    console.log(count)
    }
    
}

function clearIt(){
    console.log("Cleared")
   count=0
    document.getElementById("count").innerText = 0
}
function save(){
    let countstr = count +  " - "
    document.getElementById("entries").textContent += countstr
}
