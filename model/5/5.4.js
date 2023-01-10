function color(color) {
  switch (color) {
    case 'yellow':
    case 'orange':
      return "light color"
      break;

    case 'blue':
    case 'purple':
    case 'brown':
      return "dark color"
      break;

    default:
      return 'unKnown Color'
      break;
  }

}

console.log(color("yellow"));
console.log(color("orange"));
console.log(color("blue"));
console.log(color("purple"));
console.log(color("black"));