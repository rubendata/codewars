
//Initialize
var decimalNumber = prompt("Wähle eine Zahl:","größer 0");

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
    

    //write function to calculate highest 2^x number that fits in decimalNumber
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
            decimalNumber = decimalNumber - highestPowerTwo;

            var highestPowerTwo = getHighestPowerTwo(powerTwoArray,decimalNumber);
            for (i=0;i<maxPosition;i++) {
                binaryArray[i] = 0;
            }
        }
    }
    
}

//sort binaryArray other way round
return binaryArray;
}

document.write("Die Zahl "+decimalNumber+" als BinärZahl: "+getBinary(decimalNumber));
