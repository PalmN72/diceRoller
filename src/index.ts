import "./styles/index.css";
const main = document.querySelector('section')
const btn = document.querySelector('#rollBtn');
const add = document.querySelector('#addDie')

const dFour = [];
const dSix = ['https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png', 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png', 'https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png']
const dEight = [];
const dTen = [];
const dTwelve = [];
const dTwenty = [];

const randomNr = () => Math.floor(Math.random() * 6)

const setImg = (img: HTMLElement) => img.setAttribute('src', dSix[randomNr()])

const addDSix = () => {
  const die = document.createElement('div')
  const dieImg = document.createElement('img')

  setImg(dieImg)
  die.append(dieImg)
  dieImg.addEventListener("click", () => die.remove());
  dieImg.setAttribute('class', 'dice')
  main.insertBefore(die, main.firstChild)
}

add.addEventListener('click', () => {
  const amountOfDice = document.querySelectorAll('.dice')
  if (amountOfDice.length < 8) addDSix()
})

btn.addEventListener('click', () => {
  document.querySelectorAll('.dice').forEach((element: HTMLElement) => setImg(element))
});
