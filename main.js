var name = "greg carver";
var upper = name.toUpperCase();
console.log("Name:" + upper);


function displayPosition(company,job,description){
        return "Career: " + company + job +  description;
}

console.log(displayPosition("Petsmart ","Dog Groomer/","Staff Manager"));

console.log("Description:Natural leader with concern about sales,customers and my peers")

var interests= ['*Video Games', '*Esports' , '*Eating','*Not Dieting'];

console.log(interests[0]); 
console.log(interests[1]); 
console.log(interests[2]); 
console.log(interests[3]); 

console.log("My Previous Experiences:")

console.log("*Dog Trainer")
console.log("-Helped lead and organize group classes as well as private lessons")
console.log("*Dog Sitter")
console.log("-Drank all their beer and ate all their food....oh and I fed their dog")

var skills=['*Dank Memes', '*Wasting Time','Eating Cheetos','Drinking Mountain Dew','Bad puns']


function displaySkill(skill, isCool){
    console.log(skill);
    console.log(isCool);

   if (isCool === true) {
       console.log('Check It:' + skill);
   } else {
       console.log(skill);
   }
}

displaySkill(skills[0], true);
displaySkill(skills[1], false);
displaySkill(skills[2], false);
displaySkill(skills[3], true);
displaySkill(skills[4],false);

