
var Numero = prompt("digite um numero");

if (Numero % 3 == 0){
    document.write("Frizz");
    console.log("Frizz");
}
else if(Numero % 5==0){
    document.write("Buzz");
    console.log("Buzz");
}
else if(Numero % 5== 0 && Numero % 3 == 0){
    document.write("FizzBuzz");
    console.log("FizzBuzz");
}
else{
    document.write("Batata");
    console.log("Batata");

    }
