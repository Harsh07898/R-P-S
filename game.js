let user=prompt("Enter R , P or S")
let cpui=Math.floor(Math.random()*3)
let cpu=["R","P","S"][cpui]

const match=(cpu,user)=>{
    if(cpu===user){
    return "MATCH TIED"
    }
    else if(cpu==="R" && user==="P"){
    return "cpu"
    }
    else if(cpu==="R" && user==="S"){
    return "cpu"
    }
    else if(cpu==="S" && user==="P"){
    return "cpu"
    }
    else if(cpu==="S" && user==="R"){
    return "user"
    }
    else if(cpu==="P" && user==="R"){
    return "cpu"
    }
    else if(cpu==="P" && user==="S"){
    return "user"
    }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )