let x,y,z;
x=5;
y=6;
z=x+y;
console.log(z);
document.getElementById("box1").style.color="red";
document.getElementById("demo").innerHTML=5+6;
document.getElementById("demo").style.fontSize="35px";
document.getElementById("demo").addEventListener("click",function(){
    if(this.style.color=="red")
        this.style.color="blue";
    else
        this.style.color="red";
});

document.getElementById("demo").addEventListener("mouseover",()=>{
    document.getElementById("demo").innerText="hover";
});