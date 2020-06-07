
//Initialize

var maximumInput = Math.pow(2, 1000);
var decimalNumber = prompt("Wähle eine Zahl:","zwischen 0 und "+maximumInput);
if(decimalNumber > maximumInput) {alert("Falsche Eingabe")}

function getBinary (decimalNumber){
    var maxPower = 1000;
    var powerTwoArray = [];
    var counter = -1;
    var powerArray = [];

    //generate an array with 2^x numbers
    while (counter <maxPower){
    counter++;
    powerArray.push(counter);
    }
    for (i=0; i<powerArray.length; i++) {
        powerTwoArray.push(Math.pow(2,powerArray[i]));
    }
    console.log(powerTwoArray[powerTwoArray.length-1]);

    //function to calculate highest 2^x number that fits in decimalNumber
    function getHighestPowerTwo (powerTwoArray, decimalNumber) {
        var highestPowerTwo;
        if(decimalNumber > 0){
            for (i=0;i<powerTwoArray.length; i++) {
            if (decimalNumber >= powerTwoArray[i]) {highestPowerTwo = powerTwoArray[i]}
            
            }   
            return highestPowerTwo;
        }
        else return highestPowerTwo = 0;
        }


    //generate binary array
    var binaryArray = [];
    var maxPosition;
    var highestPowerTwo = getHighestPowerTwo(powerTwoArray,decimalNumber);
    while(decimalNumber>0){
    for (i=0; i<powerTwoArray.length;i++){
        if(powerTwoArray[i]==highestPowerTwo) {
            binaryArray[i] = 1;
            maxPosition = i;
            console.log("highestPowerTwo: "+highestPowerTwo);
            console.log("decimalNumber vorher: "+decimalNumber);
            decimalNumber = decimalNumber - highestPowerTwo;
            console.log("decimalNumber vorher: "+decimalNumber);
            var highestPowerTwo = getHighestPowerTwo(powerTwoArray,decimalNumber);
            for (i=0;i<maxPosition;i++) {
                binaryArray[i] = 0;
            }
        }
    }
    
}

//sort binaryArray other way round
var binaryFinal=[];
var position = binaryArray.length;
var oldPosition;
    for (i=0;i<binaryArray.length;i++){
        oldPosition = position;
        position = oldPosition-1;
        binaryFinal[i] = binaryArray[position];
        }

//convert binaryArray to a String four output
var binaryOutput="";
var placeholder;
for (i=0;i<binaryFinal.length;i++){
    var binaryNumber = binaryFinal[i];
    placeholder = binaryOutput;
    binaryOutput = placeholder+''+binaryFinal[i];
}
return binaryOutput;
}
document.write("Die Zahl "+decimalNumber+" als BinärZahl: "+getBinary(decimalNumber));
//ab einer Zahl größer als 10000000000000000000000 funktioniert der Algorithmus nicht mehr. Habe ich evtl. einen Datentyp verwendet, der nur eine maximale länge von 23 stellen hat?