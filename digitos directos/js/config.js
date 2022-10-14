
let numbers = []
let uNumbers = []
let round = 1;
let points = 0;
let gamedata = document.cookie = `nCount=3;round=1;points=0`


function randomizer(query){
    if(query == "numbers")    {return Math.floor(Math.random() * (9 - 0) + 0); }
    if(query == "points")     {return Math.floor(Math.random() * (numbers.length - round) + round )}
    if(query == "numberCount"){return Math.floor(Math.random() * (9 - 3) + 3); }
}

function cookieReader(cookie, query){
    let CSP = cookie.split(';');
    for(let x in CSP){
        let c = CSP[x];
        if (c.indexOf(query) == 0) {
          return c.substring(query.length+1, c.length);
        }
    }

}


let bf = 0; let bff;
function boldOrNoBold(){
    let bold = Math.floor(Math.random()); 
    if(bold == bff){bold = 1}
    if(bold == 0 && bf == 0){bf = 1; bff = bold;  return "font-weight:bold" }
    if(bold == 1 && bf == 1){bf = 0; bff = bold;  return "font-style:italic" }
}


function NPConstruct(){
    for(let x = 0; x <= 9; x++){
        const div = document.createElement("div");
        div.id = "T_"+x; 
        div.innerHTML = '<p style="font-size:2vw" id="btn_'+ x +'"  class="btn" onclick="selectCharacter(event)">' + x + '</p>';
        document.getElementById('npad').appendChild(div);
    }
    document.getElementById('npad').style = '';
}

function zamasEverything(){
    document.getElementById('uSelect').innerHTML = ' ';
    document.getElementById('npad').innerHTML = ' ';
    document.getElementById('validate').style = 'display:none';
    document.getElementById('clean').style = 'display:none';
    numbers.length = 0;
    uNumbers.length = 0;
}