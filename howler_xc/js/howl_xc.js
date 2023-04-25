// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Put all of your code inside the DOMContentLoaded event listener provided.

document.addEventListener("DOMContentLoaded", () => {
  // Use .getElementsByClassName() to get an HTMLCollection of all .animalTitle elements.
  let animal_collection = document.getElementsByClassName("howlerImage");
  console.log("animal_collection==>", animal_collection);
  // Create a new Object with properties and values like 'animal01: "Cow" '.
  // These values can be found in the HTMLCollection.
  let animal_objects = {
    animal01: "Cow",
    animal02: "Duck",
    animal03: "Horse",
    animal04: "Fox",
  };

  // Use the Object to create event listeners for <img> elements that launch the provided howler script.
  // Write a single 'for...in' statement to add listeners to all the <img> elements.
  // .addEventListener('click', () => {CODE GOES HERE}
  // The animal title (e.g. 'Cow') determines which sprite is played.
  for (let animal of animal_collection) {
    console.log("animal==>", animal);
    animal.addEventListener("click", (event) => {
      let id = event.target.id;
      playAnimal(animal_objects[id]);
    });

    animal.addEventListener("mouseover", (event) => {
      let id = event.target.id;
      document.getElementById(id).style = "border:3px solid red";
    });
    animal.addEventListener("mouseout", (event) => {
      let id = event.target.id;
      document.getElementById(id).style = "border:0px";
    });
  }
  // Leverage the Object to add mouseover styling to the <img> elements.
  // You'll need to add listeners to the <img> elements.
  // Then you'll need to write functions to do the events.
  // On mouseover add this.style.border = '3px solid red';
  // On mouseout add this.style.border = '0px';
});

function playAnimal(animalSound) {
  var sound = new Howl({
    src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    },
  });
  sound.play(animalSound);
}
