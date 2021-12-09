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

  feed(){
    this.hunger++
  }

  sleep(){
    this.sleepiness++
  }

  play(){
    this.boredom++
  }

}

let hungerButton = document.querySelector('.feedButton')
let hungerCounter = document.querySelector('.hunger')

let sleepinessButton = document.querySelector('.sleepButton')
let sleepinessCounter = document.querySelector('.sleepiness')

let boredomButton = document.querySelector('.boredomButton')
let boredomCounter = document.querySelector('.boredom')

const removeStats = document.querySelector('.stats')
const removeStart = document.querySelector('.buttonBegin')


buttonBegin = document.querySelector('button');




const wolfie = new Wolfie('.Wolfie')

const game = {

    setHunger(){
        const intervalID = setInterval(() => {
          const hungerID = document.querySelector('.hunger');
          hungerID.innerText = ` ${wolfie.hunger}`;
          // decrement hunger
          wolfie.hunger--
          if(wolfie.hunger === 0){
            alert('Your pet died from starvation')
            removeStats.remove()
            removeStart.remove()
            document.querySelector('.pet').src = ('https://media0.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif?cid=ecf05e47gbw11mmxpf2b6p4c7fovz8khp40mat33tb7xwh2h&rid=giphy.gif&ct=g')
            document.body.style.backgroundImage =
            clearInterval(intervalID);
            document.querySelector('button').disabled = false;
            return;
          }
        }, 7000)
        hungerButton.addEventListener('click', () =>{
            wolfie.feed();
            console.log(wolfie.hunger);
            document.body.style.backgroundImage = "url('https://64.media.tumblr.com/c4ef683055d8fc8e5517cdc221a7d57a/d3238a119a00c682-b9/s1280x1920/324855e88fa138547b29b3f87200161526dc2356.jpg')"
          })
      },
      setSleepiness(){
        const intervalID = setInterval(() => {
          const sleepinessID = document.querySelector('.sleepiness');
          sleepinessID.innerText = ` ${wolfie.sleepiness}`;
          // decrement sleepiness
          wolfie.sleepiness--
          if(wolfie.sleepiness === 0){
            alert('Your pet died from starvation')
            removeStats.remove()
            removeStart.remove()
            clearInterval(intervalID);
            document.querySelector('button').disabled = false;
            return;
          }
        }, 7000)
          sleepinessButton.addEventListener('click', () =>{
              wolfie.sleep();
              console.log(wolfie.sleepiness);
              document.body.style.backgroundImage = "url('https://i.imgur.com/31pRxIr.png')";
              const pet = document.querySelector('.pet')
          })

        },
        setBoredom(){
          const intervalID = setInterval(() => {
            const boredomID = document.querySelector('.boredom');
            boredomID.innerText = ` ${wolfie.boredom}`;
            // decrement boredom
            wolfie.boredom--

            if(wolfie.boredom === 0){
              alert('Your pet died from an insane amount of boredom')
              removeStats.remove()
              removeStart.remove()
              document.querySelector('.pet').src = ('https://media0.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif?cid=ecf05e47gbw11mmxpf2b6p4c7fovz8khp40mat33tb7xwh2h&rid=giphy.gif&ct=g')
              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 7000)
          playButton.addEventListener('click', () =>{
              wolfie.play();
              document.body.style.backgroundImage = "url('https://i.imgur.com/p2bN0d9.png')"
            })
        },

          setAge(){
            const intervalID = setInterval(() => {
              const ageID = document.querySelector('.age');
              ageID.innerText = ` ${wolfie.age}`;
              // increment age
              wolfie.age++
              if(wolfie.age == 5){
                alert('Your pet has gained a new form!!!!')
                document.querySelector('.pet').src = "url('/Users/wolfe/sei-anemone/homeworks/Tamagotchi/js/images/imgbin-gray-wolf-drawing-cartoon-sketch-others-t8T5hfXYL3d9xgka0JjkyGsxZ.jpg')"
              }

              if(wolfie.age == 14){
                alert('Your pet has hit its final form!!!!')
                document.querySelector('.pet').src = "url('/Users/wolfe/sei-anemone/homeworks/Tamagotchi/js/images/pngwing.com copy.jpg')"
              }
          }, 6000)
        },

          setName(){
          this.name = prompt('Name your pet')
          const nameID = document.querySelector('.name')
          nameID.innerText = `${this.name}`
        },

    startGame() {
      alert("Welcome to Marc Wolfe's Tomagatchi Game!")
      alert("The rules are as follows. You have three stats to worry about for now and those are Hunger, Boredom, and Sleepiness")
      alert("These three stats are set to 10 which means full and the lower they go your pet gets closer to death")
      alert("If you want your pet to survive and experience different forms of life you must not allow the stats to get to 0")
      alert("To increase a certain stat there are three buttons to choose from. DOUBLECLICK whichever button you need to increase the stat by 1")
      alert('Thats all the help you get, enjoy the game!')
      this.setName()
      this.setHunger()
      this.setBoredom()
      this.setSleepiness()
      this.setAge()
  }

}

buttonBegin.addEventListener("click", (event)=>{
  event.target.disabled = true;
  game.startGame();
})
