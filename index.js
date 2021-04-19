const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';



// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  // Model.create() new recipe
  // creating a new recipe

const newRecipe =   {
    title: "Pasta al sughero",
    level: "Easy Peasy",
    ingredients: [
      "spaghetti",
      "sughero",
      "salt",
      "water"
    ],
    cuisine: "Italian",
    dishType: "main_course",
    image: "https://www.lospicchiodaglio.it/img/ricette/pastasugofilettipesce.jpg",
    duration: 30,
    creator: "Chef Andrea",
    created: "2021-04-19"
    };


// Iteration 2 - 
// Recipe.create(newRecipe)
// .then(recipe => console.log('The new recipe is named: ', recipe))
// .catch(error => console.log('An error happened:', error));


// Iteration: 3
// Recipe.insertMany(data)
//     .then(recipesFromDB => {
//       recipesFromDB.forEach(oneRecipe => console.log(`recipe: ${oneRecipe.title}`));
//     })
//     .catch(error => console.log(`Error occurred during getting recipes from DB: ${error}`));


// Iteration 4 - Update recipe --- findOneAndUpdate deprecated???
// Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
// .then(duration => console.log('Now the duration is ok'))
// .catch(error => console.log(`Error occurred during getting recipes from DB: ${error}`));


// Iteration 5 - Remove a recipe
Recipe.deleteOne({ title: "Carrot Cake" })
.then((carrotC) => {
  console.log('Bye Bye Carrot Cake')
  mongoose.connection.close()
  .then(bye => console.log('Good night DB'))
})
.catch(error => console.log('An error happened:', error));

