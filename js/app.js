class Pet {
  constructor(hunger, sleepiness, boredom, age){
    this.hunger = hunger
    this.sleepiness = hunger
    this.boredom = hunger
    this.age = age
  }
}

class Wolfie extends Pet {
  constructor(hunger, sleepiness, boredom, age){
    super(hunger, sleepiness, boredom, age)
    this.hunger = 10
    this.sleepiness = 10
    this.boredom = 10
    this.age = age
  }
}

const wolfie = new Wolfie('.Wolfie')

let hungerButton = document.querySelector('.feedButton')

hungerButton.addEventListener('click', () =>{
  
})
