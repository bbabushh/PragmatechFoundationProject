let ilkEded = prompt("ilk ededi daxil edin :")
let ikinciEded = prompt("ikinci ededi daxil edin :")

if(ilkEded*1==ilkEded && ikinciEded*1==ikinciEded){
    let emeliyyat = prompt("emeliyyat isaresini daxil edin")

    
    if(emeliyyat == "+"){
        
        alert(ilkEded*1+ikinciEded*1)
    }
    if(emeliyyat=="-"){
        alert(ilkEded-ikinciEded)
    }
    if(emeliyyat=="*"){
        alert(ilkEded*ikinciEded)
    }
    if(emeliyyat=="/"){
        alert(ilkEded/ikinciEded)
    }
}
else{
    alert("eded daxil etmeyi oyren")
}