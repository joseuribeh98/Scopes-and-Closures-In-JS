//Ejercicio para entender Closures

function createPetList() {
  let petList = [];
  function addPet(petName) {
    if (petName) {
      petList.push(petName);
    }
    console.log(petList);
  }
  return addPet;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
