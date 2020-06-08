/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
function solution(str){
   let strToArray =  str.split("");   
   let outputArray = [];
   
  
   for(i=0;i<strToArray.length;i+=2){
     
     outputArray.push( getTwoChars([strToArray[i],strToArray[i+1]]))
   }
   
   function getTwoChars (array){
      
         if(typeof(array[1])!=="undefined"){ 
            
            return array[0]+array[1];
         }
         else {
          
            return array[0]+"_"
         }
      
   }
   return outputArray
}



console.log( solution("testomingon"))

