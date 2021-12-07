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


buttonBegin = document.querySelector('button');




const wolfie = new Wolfie('.Wolfie')

const game = {

    name: wolfie.name,
    hunger: wolfie.hunger,
    sleepiness: wolfie.sleepiness,
    boredom: wolfie.boredom,
    age: wolfie.age,

    setHunger(){
        const intervalID = setInterval(() => {
          const hungerID = document.querySelector('.hunger');
          hungerID.innerText = ` ${wolfie.hunger}`;
          // decrement hunger
          wolfie.hunger--
          if(wolfie.hunger <= 0){
            alert('Your pet died from starvation')
            document.querySelector('.pet').src = ('https://media0.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif?cid=ecf05e47gbw11mmxpf2b6p4c7fovz8khp40mat33tb7xwh2h&rid=giphy.gif&ct=g')
            clearInterval(intervalID);
            document.querySelector('button').disabled = false;
            return;
          }
        }, 1000)
        hungerButton.addEventListener('click', () =>{
            wolfie.feed();
            console.log(wolfie.hunger);
            document.body.style.backgroundImage = "url('https://64.media.tumblr.com/c4ef683055d8fc8e5517cdc221a7d57a/d3238a119a00c682-b9/s1280x1920/324855e88fa138547b29b3f87200161526dc2356.png')"
            document.querySelector('.pet').src = ('https://i.imgur.com/RHnnBBA.png')
          })
      },
      setSleepiness(){
        const intervalID = setInterval(() => {
          const sleepinessID = document.querySelector('.sleepiness');
          sleepinessID.innerText = ` ${wolfie.sleepiness}`;
          // decrement hunger
          wolfie.sleepiness--
          if(wolfie.sleepiness <= 0){
            alert('Your pet died from starvation')
            document.querySelector('.pet').src = ('https://media0.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif?cid=ecf05e47gbw11mmxpf2b6p4c7fovz8khp40mat33tb7xwh2h&rid=giphy.gif&ct=g')
            clearInterval(intervalID);
            document.querySelector('button').disabled = false;
            return;
          }
        }, 1000)
          sleepinessButton.addEventListener('click', () =>{
              wolfie.sleep();
              console.log(wolfie.sleepiness);
              document.body.style.backgroundImage = "url('https://cutewallpaper.org/21/pixel-stars-background/night-nighttime-stars-clouds-background-pixel-pixel-bac.png')";
              document.querySelector('.pet').src = ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynq9Rj_tz0RJByVWNcKmhppzXA6e2uvs4Cg&usqp=CAU')
              const pet = document.querySelector('.pet')
          })

        },
        setBoredom(){
          const intervalID = setInterval(() => {
            const boredomID = document.querySelector('.boredom');
            boredomID.innerText = ` ${wolfie.boredom}`;
            // decrement boredom
            wolfie.boredom--

            if(wolfie.boredom <= 0){
              alert('Your pet died from an insane amount of boredom')
              document.querySelector('.pet').src = ('https://media0.giphy.com/media/3oEjHJYwFLAPyMx128/giphy.gif?cid=ecf05e47gbw11mmxpf2b6p4c7fovz8khp40mat33tb7xwh2h&rid=giphy.gif&ct=g')

              clearInterval(intervalID);
              document.querySelector('button').disabled = false;
              return;
            }
          }, 1000)
          playButton.addEventListener('click', () =>{
              wolfie.play();
              document.body.style.backgroundImage = "url('https://64.media.tumblr.com/c4ef683055d8fc8e5517cdc221a7d57a/d3238a119a00c682-b9/s1280x1920/324855e88fa138547b29b3f87200161526dc2356.png')"
              document.querySelector('.pet').src = ('https://i.imgur.com/RHnnBBA.png')
            })
        },

          setAge(){
            const intervalID = setInterval(() => {
              const ageID = document.querySelector('.age');
              ageID.innerText = ` ${wolfie.age}`;
              // increment age
              wolfie.age++
          }, 7000)
          if(wolfie.boredom || wolfie.sleepiness || wolfie.hunger){
            clearInterval(intervalID);
            return;
          }
        },

          setName(){
          this.name = prompt('Name your pet')
          const nameID = document.querySelector('.name')
          nameID.innerText = `${this.name}`
        },

        secondForm(){
          if(this.age === 2){
            alert('Your pet has gained a new form!!!!')
            document.querySelector('.pet').src = ('https://e7.pngegg.com/pngimages/159/420/png-clipart-blood-dog-red-fox-drawing-pack-pixel-art-wolf-horse-mammal.png')
          }
        },

        thirdForm(){
          if(this.age === 5){
            alert('Your pet has gained another new form!!!!')
            document.querySelector('.pet').src = ('https://w7.pngwing.com/pngs/595/697/png-transparent-black-wolf-illustration-wolfdog-panthera-deer-drawing-wolf-animals-dog-like-mammal-wolf.png')
          }
        },


    startGame() {
      this.setName()
      this.setHunger()
      this.setBoredom()
      this.setSleepiness()
      this.secondForm()
      this.setAge()
  }

}




buttonBegin.addEventListener("click", (event)=>{
  event.target.disabled = true;
  game.startGame();
})
