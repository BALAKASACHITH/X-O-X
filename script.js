let b=document.querySelectorAll(".box");
let p=document.querySelector(".info");
let q=document.querySelector(".qu");
let r="";
function clr(){
    b.forEach((l)=>{
        l.innerText="";
        p.innerText=r+"\n PLAYER '1' TURN";
    });
};
function love(){
    r="";
    clr();
    p.innerText="TIE";
}
q.addEventListener("click",clr);
let c="O"
let a=[];
function fill(){
    a=[];
    b.forEach((l)=>{
        a.push(l.innerText);
    });
    let c=0;
    for(let i=0;i<a.length;i++){
        if(a[i]=="")
        c=1;
    }
    if(c==0)
    love();
}
function checkx(){
    if(a[0]=="X"&&a[1]=="X"&&a[2]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[0]=="X"&&a[4]=="X"&&a[8]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[2]=="X"&&a[4]=="X"&&a[6]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[3]=="X"&&a[4]=="X"&&a[5]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[6]=="X"&&a[7]=="X"&&a[8]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[0]=="X"&&a[3]=="X"&&a[6]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[1]=="X"&&a[4]=="X"&&a[7]=="X"){
        r="PLAYER ONE WON";
        clr();
    }else if(a[2]=="X"&&a[5]=="X"&&a[8]=="X"){
        r="PLAYER ONE WON";
        clr();
    }
}
function checky(){
    if(a[0]=="O"&&a[1]=="O"&&a[2]=="0"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[0]=="O"&&a[4]=="0"&&a[8]=="0"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[2]=="O"&&a[4]=="O"&&a[6]=="O"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[3]=="O"&&a[4]=="O"&&a[5]=="O"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[6]=="O"&&a[7]=="O"&&a[8]=="O"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[0]=="O"&&a[3]=="O"&&a[6]=="O"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[1]=="O"&&a[4]=="O"&&a[7]=="O"){
        r="PLAYER TWO WON";
        clr();
    }else if(a[2]=="O"&&a[5]=="O"&&a[8]=="O"){
        r="PLAYER TWO WON";
        clr();
    }
}
function f(){
    if(this.innerText==""&&c=="O"){
        this.innerText="X";
        this.style.color="orange";
        p.innerText="PLAYER '2' TURN";
        p.style.color="blue";
        c="X";
        fill();
        checkx();
    }else if(this.innerText==""&&c=="X"){
        this.innerText="O";
        this.style.color="blue";
        p.innerText="PLAYER '1' TURN";
        p.style.color="orange";
        c="O";
        fill();
        checky();
    }else{
        p.innerText="Enter at empty space !!";
    }
}
b.forEach((l)=>{
    l.addEventListener("click",f);
});