//1
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

  
  
  //2
  const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
      setTimeout((ID) => {
        const recipe = {
        title: "Fresh tomato pasta",
        publisher: "Pinchas Hodadad",
      };
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recipeID);
  });
};

const getIdsAsync = async () => {
  try {
    const Ids = await getIDs();
    const recipt=await getRecipe(Ids[0]);
    
    console.log(recipt);
  } catch (error) {
    console.log(error);
  }
}
getIdsAsync()