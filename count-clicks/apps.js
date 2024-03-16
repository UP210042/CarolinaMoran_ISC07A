//const container_clicks = require("container_clicks");
const container_clicks = document.getElementById('container_clicks');

const btnincrement = document.querySelector('.btn-primary');
const btndecrement = document.querySelector('.btn-secondary');
const btnreset = document.querySelector('.btn-third');
let conter=0;


btnincrement.onclick= function(){
    conter++;
    container_clicks.innerText=conter;
};

btndecrement.oncliCK=()=>{
    conter--;
    container_clicks.innerText=conter;
};

btnreset.onclick=()=>{
    conter=0;
    container_clicks.innerText=conter;
};
console.log(btnincrement);
