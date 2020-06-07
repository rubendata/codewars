let members = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
//>= 55 years and handicap greater than 7; the better the player the lower the handicap



function openOrSenior (data){
      let outputList = [];
      let category;
      for (i of data) {
            
            let age = i[0];
            let handicap = i[1];
            if(age >= 55 && handicap >7) {
                  category = "Senior";
                  outputList.push(category);
            } else {
                  category = "Open";
                  outputList.push(category);
            }

      }
      return outputList
}
console.log( openOrSenior(members));