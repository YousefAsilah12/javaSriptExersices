function func(language) {
  switch (language) {
    case 'mandarin':
      console.log("'MOST number of native speakers!'");
      break;

    case 'Spanish':
      console.log("'2nd place in a number of native speakers'");
      break;

    case 'English':
      console.log("'3rd place'");
      break;

    case 'Hindi':
      console.log("Number 4'");
      return;

    case 'Arabic':
      console.log("'5th most spoken language'");
      break;

    default:
      console.log("not on top 5 languages");
      break;
  }
}

func("mandarin");
func("Spanish");
func("English");
func("Hindi");
func("Arabic");
func("chinese ");