function gameStart(){
    document.getElementById('start').style="display:none";
    document.getElementById('title').innerHTML = "Ronda <br>" +  cookieReader(gamedata,"round")
    const interval = setInterval(timerNumbers, 1000);
    function timerNumbers(){
        numbers.push(randomizer("numbers"))
        if(numbers.length <= parseInt(cookieReader(gamedata,"nCount"))){
            document.getElementById("txt").innerHTML = `<h1 style="color:blue; ${boldOrNoBold()}">`+ numbers[numbers.length-1];
        }else{
            clearInterval(interval); numbers.splice(numbers.length-1, numbers.length)
            document.getElementById('txt').innerHTML = 'Seleccione los numeros en orden';
            NPConstruct();
            
        }
    }
}


document.getElementById('clean').onclick = function(){
    uNumbers.length = 0;
    document.getElementById('uSelect').innerHTML = ''
    const btnList = document.querySelectorAll(".btn");
    for(let x in btnList){
        btnList[x].style = 'btn';
    }
}

function selectCharacter(event){
    let btn = document.getElementById(event.target.id); 
    if(btn.style.backgroundColor == "green"){
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.650)"; 
    }else{
         btn.style.backgroundColor = "green";
         uNumbers.push(parseInt(btn.innerText));  
         document.getElementById('validate').style="";
         document.getElementById('clean').style="";
         document.getElementById('uSelect').innerHTML = uNumbers.join(' - ')
    }
}

document.getElementById('validate').onclick = function(){
    let cAccert = 0
    if(uNumbers.length == numbers.length){
        for(let x in uNumbers){
            if(uNumbers[x] == numbers[x]){
                cAccert+=1;
                console.log(cAccert)
            }
        }
        if(cAccert == numbers.length){
            alert("Ganaste")
            round+=1;
            gamedata = document.cookie = `nCount=${randomizer("numberCount")};round=${round};points=${randomizer("points")}` 
            zamasEverything();
            gameStart()
        }else{
            zamasEverything();  
            round = 1;
            gamedata = document.cookie = `nCount=3;round=${round};points=0` 
            gameStart()
            alert("Perdiste") 
        }

    }else{
        zamasEverything(); 
        round = 1;
        gamedata = document.cookie = `nCount=3;round=${round};points=0`  
        gameStart()
        alert("Perdiste")
    }

    
}
