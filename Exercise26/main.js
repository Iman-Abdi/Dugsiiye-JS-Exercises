console.log("This Massege Is Started");

function Massege() {
    alert(  "This Massage is Blocked until you click Ok");
    return ("Iman");
}

const User = Massege();

console.log("User = " + User);

console.log("This is Called synchronous");



console.log("-------------------");
console.log("-------------------");


console.log("Masaage Started Now");

function farriin(callback){
    setTimeout( () =>
        {
            console.log("This Massage will be send After 3 second") 
        }, 3000
        
    )    
};

farriin();

console.log("This massage you will see immedietly");

