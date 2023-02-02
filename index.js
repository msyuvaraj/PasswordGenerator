const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = ""
let password2 = ""
let div1El = document.getElementById("div1")
let div2El= document.getElementById("div2")

function generatePwd(){
    
    if (div1El.textContent==="" && div2El.textContent===""){
        
        for (let i = 0; i < 15; i++){
            let rand1 = Math.floor(Math.random()*characters.length)
            password1 += characters[rand1]
        }
        div1El.textContent = password1
        
        for (let i = 0; i < 15; i++){
            let rand2 =Math.floor(Math.random()*characters.length)
            password2+= characters[rand2]
        }
        div2El.textContent = password2  
        
    }else{
        erase()
    }
        
}

function erase(){
    password1=""
    password2=""
    div1El.textContent=""
    div2El.textContent=""
    generatePwd()
    
}



