const mycountry = {
  country: "Canada",
  capital: "Ottawa",
  language: "English and French",
  population: 37410000,
  neighbours: ["United States", "alaska", "Miquelon"],
  describe: function () {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language},
     they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false
  }

}
mycountry.describe();