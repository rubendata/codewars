/*
- es wird eine Zahl eingegeben
- diese Zahl wird in Binärzahlen zerlegt
- binär geht so: 
2^0=1
2^1=2
2^2=4
...
2^8 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
256 128 64  32  16  8   4   2   1
1   0   0   0   0   0   0   0   0   = 256
1   1   0   0   0   0   0   0   0   = 256+128 = 384
1   0   0   0   0   0   0   0   1   = 256+1=257
usw
*/

//Initialize
var decimalNumber = 1000000;
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
    
//console.log(powerTwoArray);

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

    document.write(getHighestPowerTwo(powerTwoArray,decimalNumber));

//generate binary array
    var binaryArray = [];
    var maxPosition;
    var highestPowerTwo = getHighestPowerTwo(powerTwoArray,decimalNumber);
    while(decimalNumber>0){
    for (i=0; i<powerTwoArray.length;i++){
    if(powerTwoArray[i]==highestPowerTwo) {
        binaryArray[i] = 1;
        maxPosition = i;
        //console.log("maxPosition: "+maxPosition);
        //console.log("gefundene Stelle im powerTwoArray: "+powerTwoArray[i]);
        //console.log("decimalNumber vorher: "+decimalNumber);
        decimalNumber = decimalNumber - highestPowerTwo;
        //console.log("decimalNumber nachher: "+decimalNumber);
        var highestPowerTwo = getHighestPowerTwo(powerTwoArray,decimalNumber);
        //console.log("highestPowerTwo: "+highestPowerTwo);
        for (i=0;i<maxPosition;i++) {
            binaryArray[i] = 0;
        }
        //console.log(binaryArray);
        }
          
    }
    
}

console.log(binaryArray);

/*
function getHighestBinary (powerTwoArray, decimalNumber, highestPowerTwo){
    var binaryArray = [];
    var maxPosition;
    
    while(decimalNumber>0){
        for (i=0;i<powerTwoArray.length; i++) {
            if(powerTwoArray[i]==highestPowerTwo) {
                binaryArray[i] = 1;
                maxPosition = i;
                decimalNumber = decimalNumber - highestPowerTwo;
                }
            }
        for (i=0; i<maxPosition; i++) {
                binaryArray[i] = 0;
            }
             
            
        }    
        return binaryArray;  //code rennt sich tot, warum?
}    
            
  
*/
