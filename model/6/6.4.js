const populations = [331002651, 211247538,13861391,9142400];

function populationPercentages(array) {
  let percentage=[];

  for (let i = 0; i < array.length; i++) {
    let currpopulation=array[i];
    let percentageOfWorld2 = currpopulation =>((currpopulation/7900)*100).toFixed(2)+'%';
    console.log(percentageOfWorld2)
    percentage.push(percentageOfWorld2)
  }

  return percentage;
}

