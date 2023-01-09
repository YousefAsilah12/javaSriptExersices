// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.



let jhon = [116, 33, 444];
let mike = [116, 3333, 444];
let marry = [116, 33, 444];

const average = (parm) => {
  let sum = 0;
  for (let i = 0; i < parm.length; i++) {
    sum += parm[i];
  }
  return sum / parm.length;
}
let mikeavg = average(mike);
let jhonavg = average(jhon);
let marryavg = average(marry);


if (jhonavg > mikeavg &&jhonavg>marryavg) {
  console.log("Jhon team winner with score :" + jhonavg)
}else if(mikeavg> marryavg&&mikeavg >jhonavg){
  console.log("mike teams winner with score :" + mikeavg);
} 
else if(marryavg> mikeavg&&marryavg >jhonavg){
  console.log("marry teams win :" + marryavg);
}
  else if(jhonavg === mikeavg &&jhonavg===marryavg){
  console.log("teams draw :" + jhonavg)
}
else{
  console.log("no one wins")
}

//while some winnig and other draw : 
 if(mikeavg === marryavg ){
  console.log("mike teams and marry tems draw :" + mikeavg);
}else if(mikeavg===jhonavg){
  console.log("mike teams and jhin tems draw :" + mikeavg);}
  else if(jhonavg===marryavg){ 
  console.log("mike teams and marry tems draw :" + jhonavg);}
