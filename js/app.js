class Pet {
  constructor(name, hunger, sleepiness, boredom, age){
    this.name = name
    this.hunger = hunger
    this.sleepiness = sleepiness
    this.boredom = boredom
    this.age = age
  }
}

class Wolfie extends Pet {
  constructor(name, hunger, sleepiness, boredom, age){
    super(name, hunger, sleepiness, boredom, age)
    this.name = name
    this.hunger = 10
    this.sleepiness = 10
    this.boredom = 10
    this.age = 0
  }
}



const wolfie = new Wolfie('.Wolfie')

const game = {
    name: this.name,
    hunger: 10,
    sleepiness: 10,
    boredom: 10,
    age: 0,

    setHunger(){
        const intervalID = setInterval(() => {
          const hungerID = document.querySelector('.hunger');
          hungerID.innerText = ` ${this.hunger}`;
          // decrement hunger
          this.hunger--
          hungerButton.addEventListener('click', () =>{
              this.hunger++
              document.body.style.backgroundImage = "url('https://64.media.tumblr.com/c4ef683055d8fc8e5517cdc221a7d57a/d3238a119a00c682-b9/s1280x1920/324855e88fa138547b29b3f87200161526dc2356.png')"
          })
          if(this.hunger <= 0){
            alert('Your pet is Dead')

            clearInterval(intervalID);
            document.querySelector('button').disabled = false;
            return;
          }
        }, 1000)
      },
      setSleepiness(){
          const intervalID = setInterval(() => {
            const sleepinessID = document.querySelector('.sleepiness');
            sleepinessID.innerText = ` ${this.sleepiness}`;
            // decrement sleepiness
            this.sleepiness--
            sleepinessButton.addEventListener('click', () =>{
                this.sleepiness++
                document.body.style.backgroundImage = "url('https://cutewallpaper.org/21/pixel-stars-background/night-nighttime-stars-clouds-background-pixel-pixel-bac.png')";
            })
            if(this.sleepiness <= 0){
              alert('Your pet is Dead')
              //update image to dead wolf or game of thrones red wedding
              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 1000)
        },
        setBoredom(){
          const intervalID = setInterval(() => {
            const boredomID = document.querySelector('.boredom');
            boredomID.innerText = ` ${this.boredom}`;
            // decrement boredom
            this.boredom--
            boredomButton.addEventListener('click', () =>{
                this.boredom++
            })
            if(this.boredom <= 0){
              alert('Your pet is Dead')

              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 1000)
        },

          setAge(){
            const intervalID = setInterval(() => {
              const ageID = document.querySelector('.age');
              ageID.innerText = ` ${this.age}`;
              // increment age
              this.age++;

              if(this.age >= 25){
                alert('Your pet is Dead')

                clearInterval(intervalID);
                document.querySelector('button').disabled = false;
                return;
              }
            }, 25000)
          },

          setName(){
          this.name = prompt('Name your pet')
          const nameID = document.querySelector('.name')
          nameID.innerText = `${this.name}`
        },


    startGame() {
      this.setName()
      this.setHunger()
      this.setBoredom()
      this.setSleepiness()
      this.setAge()
  }

}


let hungerButton = document.querySelector('.feedButton')
let hungerCounter = document.querySelector('.hunger')

let sleepinessButton = document.querySelector('.sleepButton')
let sleepinessCounter = document.querySelector('.sleepiness')

let boredomButton = document.querySelector('.boredomButton')
let boredomCounter = document.querySelector('.boredom')


buttonBegin = document.querySelector('button');


buttonBegin.addEventListener("click", (event)=>{
  event.target.disabled = true;
  game.startGame();
})
