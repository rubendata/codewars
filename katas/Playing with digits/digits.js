//digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digit (dig, power){
      let number = dig.toString();
      let maxPow = number.length+power;
      let lastNumber = 0;
      let currentNumber;

      while(power<maxPow) {
            
            for(i=0; i<number.length; i++){
                  currentNumber = Math.pow(number.charAt(i),power);
                  lastNumber = lastNumber + currentNumber;
                  power++;
            }
            
      }
      if(lastNumber%dig ===0){
                  return lastNumber/dig
            }
      else {
            return -1}

}
