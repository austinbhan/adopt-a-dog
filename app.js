import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

// on load

async function loadDogs() {
    const dogs = await getDogs();
    console.log(dogs);
    const main = document.getElementById('dog-list-container');


    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        main.append(dogDiv);
    }
}
// fetch all dogs
// render and append all dog cards to the container

loadDogs();