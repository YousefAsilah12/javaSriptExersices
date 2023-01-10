const countryToLiveIn = (languege, island, population, country) => {
  if (languege = 'english' && population < 50 && island === false) {
    return `you should live in ${country} .`;
  }
  return `${country} dose not meet you criteria .`;
}
const country = 'canada';
const population = '77';
const island = false;
const languege = 'english';

console.log(countryToLiveIn(languege, island, population, country));