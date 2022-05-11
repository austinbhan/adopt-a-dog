import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container'); // Will I need this later??

// on load

async function loadDogs() {
    const dogs = await getDogs();
    console.log(dogs);


    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}
// fetch all dogs
// render and append all dog cards to the container

loadDogs();
